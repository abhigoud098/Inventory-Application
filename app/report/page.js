  "use client";

import { useState, useEffect } from "react";
import styles from "./report.module.css";
import { useForm } from "react-hook-form";

export default function Report() {
  const { register, handleSubmit, reset,formState: { isSubmitting } } = useForm();
  const [ user, setUser ] = useState();

  const onSubmit = async (data) => {
    if (user) {
      const payload = {
        report: data.report,
        number: user.number,
        name: user.name
      }

      const res = await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await res.json();
      if (response.success) {
        alert('submitted successful.')
        reset();
      } else {
        alert('something went wrong, try again!');
      }
    } else {
      alert("You should be user of the website before you can report.")
    }
  }

  useEffect(() => {
    const number = localStorage.getItem("number");
    if (number) {
      fetch("/api/findUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.user) {
            setUser(data.user);
          }
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  return (
    <>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>Report</h1>
          <textarea
            placeholder="Write Your Issue/Suggestion..."
            className={styles.input}
            {...register("report", { required: true })}
          />
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <img src="/image.png" alt="image" />
      </div >
    </>
  );
}
