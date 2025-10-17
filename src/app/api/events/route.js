import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js";
import Event from "@/models/Event.js";

// GET all events
export async function GET() {
  try {
    await connectDB();
    const events = await Event.find({});
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST create a new event
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newEvent = await Event.create(data);
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}





