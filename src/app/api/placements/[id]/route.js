import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Placement from '@/lib/models/Placement';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const placement = await Placement.findById(params.id);
    
    if (!placement) {
      return NextResponse.json(
        { error: 'Placement not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(placement);
  } catch (error) {
    console.error('Error fetching placement:', error);
    return NextResponse.json(
      { error: 'Failed to fetch placement' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    
    const placement = await Placement.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );
    
    if (!placement) {
      return NextResponse.json(
        { error: 'Placement not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(placement);
  } catch (error) {
    console.error('Error updating placement:', error);
    return NextResponse.json(
      { error: 'Failed to update placement' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const placement = await Placement.findByIdAndDelete(params.id);
    
    if (!placement) {
      return NextResponse.json(
        { error: 'Placement not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Placement deleted successfully' });
  } catch (error) {
    console.error('Error deleting placement:', error);
    return NextResponse.json(
      { error: 'Failed to delete placement' },
      { status: 500 }
    );
  }
}