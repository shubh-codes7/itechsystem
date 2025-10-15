// import { NextResponse } from 'next/server';
// import { connectDB } from "@/lib/dbConnect.js"
// import Placement from '@/models/Service.js';

// export async function GET(request, { params }) {
//   try {
//     await connectDB();
//     const job = await Job.findById(params.id);
    
//     if (!job) {
//       return NextResponse.json(
//         { error: 'Job not found' },
//         { status: 404 }
//       );
//     }
    
//     return NextResponse.json(job);
//   } catch (error) {
//     console.error('Error fetching job:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch job' },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request, { params }) {
//   try {
//     await connectDB();
//     const body = await request.json();
    
//     const job = await Job.findByIdAndUpdate(
//       params.id,
//       body,
//       { new: true, runValidators: true }
//     );
    
//     if (!job) {
//       return NextResponse.json(
//         { error: 'Job not found' },
//         { status: 404 }
//       );
//     }
    
//     return NextResponse.json(job);
//   } catch (error) {
//     console.error('Error updating job:', error);
//     return NextResponse.json(
//       { error: 'Failed to update job' },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request, { params }) {
//   try {
//     await connectDB();
//     const job = await Job.findByIdAndDelete(params.id);
    
//     if (!job) {
//       return NextResponse.json(
//         { error: 'Job not found' },
//         { status: 404 }
//       );
//     }
    
//     return NextResponse.json({ message: 'Job deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting job:', error);
//     return NextResponse.json(
//       { error: 'Failed to delete job' },
//       { status: 500 }
//     );
//   }
// }