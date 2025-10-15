import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"
import Course from "@/models/Course.js"

export async function GET(request, { params }) {
  const {slug} = await params
  try {
    await connectDB();
    const course = await Course.findOne({slug});
    
    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const {slug} = await params
  try {
    await connectDB();
    const body = await request.json();
    
    const course = await Course.findOneAndUpdate(
      {slug},
      body,
      { new: true, runValidators: true }
    );
    
    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(course);
  } catch (error) {
    console.error('Error updating course:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Course slug already exists' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const {slug} = await params
  try {
    await connectDB();
    const course = await Course.findOneAndDelete({slug});
    
    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    );
  }
}