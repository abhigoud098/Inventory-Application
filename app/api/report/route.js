import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request) {
  const reportWaleBhiya = new MongoClient(
    "mongodb+srv://abhigoud198484:snapcode09@cluster0.hkwptbc.mongodb.net/"
  );

  try {
    await reportWaleBhiya.connect();

    const db = reportWaleBhiya.db("inventory");
    const collection = db.collection("reports");

    const data = await request.json();

    await collection.insertOne(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inserting report:", error);
    return NextResponse.json({ success: false, error: error.message });
  } finally {
    await reportWaleBhiya.close();
  }
}
