'use client'

import styles from './guide.module.css'

export default function Guide() {
  return (
    <>
      <div className={styles.content}>
        <h1>👋 Welcome to ShopEase</h1>
        <p className={styles.subtitle}>This app helps you manage your shop easily — no need to write everything in a notebook anymore!
          You can check your stock, prices, and orders — all in one place.</p>
        <div className={styles.guideCard}>
          <h2><span className={styles.icon}>1</span> Login and Signup</h2>
          <p>If you already have an account:</p>
          <p>Just enter your name, email, and password, then click Login.</p>
          <p>Next time, it will open automatically — you won’t need to log in again.</p>
          <br />
          <p>If you are new:</p>
          <p>Click Sign Up, fill in your details, and create your account.</p>
          <p>That’s it — your shop will be ready to manage!</p>
        </div>

        <div className={styles.guideCard}>
          <h2><span className={styles.icon}>2</span>Dashboard (Main Page)</h2>
          <p>Once you log in, you’ll see the Dashboard.</p>
          <p>Here’s what each part means:</p>
          <br />
          <p><strong>🔍 Search Bar (at the top)</strong></p>
          <p>Type the name of any product — you’ll see its quantity and price quickly.</p>
          <br />
          <p><strong>📦 3 Main Boxes</strong></p>
          <p><strong>Total Products –</strong> shows how many different items your shop has.</p>
          <p><strong>Low Stock Items –</strong> shows how many products have less than 10 in quantity.</p>
          <p><strong>Total Cost –</strong> shows how much your shop’s total stock is worth.</p>
          <br />
          <p><strong>📋 Orders Section (left box)</strong></p>
          <p>Here you can add, delete, or update orders.</p>
          <p>Every order shows Customer Name and Total Price.</p>
          <p>You can see all your previous orders until you delete them.</p>
          <br />
          <p><strong>⚠️ Low Stock Section (right box)</strong></p>
          <p>Shows all products with less than 10 left in stock.</p>
          <p>You can quickly see their quantity and price — so you know what to restock soon.</p>
        </div>

        <div className={styles.guideCard}>
          <h2><span className={styles.icon}>3</span>Side Menu (on the left)</h2>
          <p>Use the side menu to move between pages easily:</p>
          <ol>
            <li><p>🏠 Dashboard – main page</p></li>
            <li><p>📋 Products – view and edit all your products</p></li>
            <li><p>🧾 Reports – send messages to the developers</p></li>
            <li><p>📘 Guide – this help page</p></li>
          </ol>
        </div>

        <div className={styles.guideCard}>
          <h2><span className={styles.icon}>4</span>Products Page</h2>
          <p>This page shows all your shop items.</p>
          <br />
          <p>You can:</p>
          <p>➕ Add a Product: enter name, quantity, and price</p>
          <p>🖊️ Edit a Product: change quantity or price anytime</p>
          <p>❌ Delete a Product: remove old or unused items</p>
          <br />
          <p>Everything you update here will automatically reflect in the Dashboard.</p>
        </div>

        <div className={styles.guideCard}>
          <h2><span className={styles.icon}>5</span>Report Page</h2>
          <p>If something isn’t working, or you have a suggestion, go to the Report Page.</p>
          <p>Just write your message and click Send.</p>
          <p>Our team will read it and help you as soon as possible.</p>
        </div>

        <div className={styles.tipBox}>
          <h3>💡 Tips for Easy Use</h3>
          <ul>
            <li><p>Don’t worry — you can’t break anything! Try clicking around to learn.</p></li>
            <li><p>Keep your products updated — this helps the dashboard show correct numbers.</p></li>
            <li><p>Use the search bar if you have many products. It’s faster than scrolling.</p></li>
            <li><p>Check Low Stock Items daily so you never run out of stock.</p></li>
          </ul>
        </div>

        <div className={styles.footer}>
          <p>Need more help? Contact abhigoud198484@gmail.com</p>
        </div>
      </div>
    </>
  );
}
