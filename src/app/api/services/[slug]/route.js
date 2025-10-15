import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"
import Service from "@/models/Service.js"

export async function GET(request, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const service = await Service.findOne({slug});
    
    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const body = await request.json();
    
    const service = await Service.findOneAndUpdate(
      {slug},
      body,
      { new: true, runValidators: true }
    );
    
    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const service = await Service.findOneAndDelete({slug});
    
    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
