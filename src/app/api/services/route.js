import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/dbConnect.js"
import Service from '@/models/Service.js';

export async function GET() {
  try {
    await connectDB();
    const services = await Service.find({})
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const service = await Service.create(body);
    
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}




