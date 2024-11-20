// src/pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { firstName, lastName, email, subject, message } = req.body;

    console.log("Form Data Received:", { firstName, lastName, email, subject, message });

    // ตัวอย่าง: ส่งข้อมูลไปยังฐานข้อมูลหรืออีเมล
    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}