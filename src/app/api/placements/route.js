import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"
import Placement from '@/models/Placement';

export async function GET() {
  try {
    await connectDB();
    const placements = await Placement.find({}).sort({ createdAt: -1 });
    return NextResponse.json(placements);
  } catch (error) {
    console.error('Error fetching placements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch placements' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const placement = await Placement.create(body);
    
    return NextResponse.json(placement, { status: 201 });
  } catch (error) {
    console.error('Error creating placement:', error);
    return NextResponse.json(
      { error: 'Failed to create placement' },
      { status: 500 }
    );
  }
}