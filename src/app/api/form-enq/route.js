import { connectDB } from "@/lib/dbConnect.js";
import sendEnqMail from "@/lib/enquiry-email.js";
import EnqForm from "@/models/Forms/EnqForm.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    sendEnqMail({
      form: body
    })

    const form = await EnqForm.create(body)
    return NextResponse.json(form, { status: 201 });
  } catch (error) {
    console.log("Error creating Enquiry Form", error);
    return NextResponse.json(
      { error: "Failed to create Enquiry Form" },
      { status: 500 }
    );
  }
}
