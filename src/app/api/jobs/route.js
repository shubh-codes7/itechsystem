import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"

export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const job = new Job(body);
    await job.save();
    
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    );
  }
}