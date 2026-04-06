import { NextResponse } from "next/server";
import { sendContactEmail } from "@/services/emailService";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 },
      );
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const phoneValue =
      typeof phone === "string" ? phone.trim() : "";
    const messageValue =
      typeof message === "string" ? message.trim() : "";

    await sendContactEmail(
      email.trim(),
      name.trim(),
      phoneValue,
      messageValue,
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send message.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
