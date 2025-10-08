import { connectDB } from "@/lib/dbConnect.js";
import sendMail from "@/lib/send-email.js";
import DemoForm from "@/models/Forms/DemoForm.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    sendMail({
      form: body
    })

    const form = await DemoForm.create(body)
    return NextResponse.json(form, { status: 201 });
  } catch (error) {
    console.log("Error creating Demo Form", error);
    return NextResponse.json(
      { error: "Failed to create Demo Form" },
      { status: 500 }
    );
  }
}
