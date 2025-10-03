import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"
import Course from "@/models/Course.js"

export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find({}).sort({ createdAt: -1 });
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const course = await Course.create(body);
    
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Course slug already exists' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    );
  }
}




