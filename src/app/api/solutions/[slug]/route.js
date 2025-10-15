import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"
import Solution from "@/models/Solution.js"

export async function GET(request, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const solution = await Solution.findOne({slug});
    
    if (!solution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(solution);
  } catch (error) {
    console.error('Error fetching solution:', error);
    return NextResponse.json(
      { error: 'Failed to fetch solution' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const body = await request.json();
    
    const solution = await Solution.findOneAndUpdate(
      {slug},
      body,
      { new: true, runValidators: true }
    );
    
    if (!solution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(solution);
  } catch (error) {
    console.error('Error updating solution:', error);
    return NextResponse.json(
      { error: 'Failed to update solution' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const solution = await Solution.findOneAndDelete({slug});
    
    if (!solution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Solution deleted successfully' });
  } catch (error) {
    console.error('Error deleting solution:', error);
    return NextResponse.json(
      { error: 'Failed to delete solution' },
      { status: 500 }
    );
  }
}
