import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Solution from '@/lib/models/Solution';

export async function GET() {
  try {
    await connectDB();
    const solutions = await Solution.find({}).sort({ createdAt: -1 });
    return NextResponse.json(solutions);
  } catch (error) {
    console.error('Error fetching solutions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch solutions' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const solution = new Solution(body);
    await solution.save();
    
    return NextResponse.json(solution, { status: 201 });
  } catch (error) {
    console.error('Error creating solution:', error);
    return NextResponse.json(
      { error: 'Failed to create solution' },
      { status: 500 }
    );
  }
}