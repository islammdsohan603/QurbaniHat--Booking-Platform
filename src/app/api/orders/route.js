
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { auth } from '@/lib/auth';          // আপনার  
import { headers } from 'next/headers';


let cachedClient = null;
async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGODB_URI);
    await cachedClient.connect();
  }
  return cachedClient.db('Qurbani');
}

export async function POST(request) {

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json(
      { success: false, message: 'You must be signed in to place an order.' },
      { status: 401 }
    );
  }


  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON payload.' },
      { status: 400 }
    );
  }


  const { name, email, phone, address } = body;
  if (!name || !email || !phone || !address) {
    return NextResponse.json(
      { success: false, message: 'All fields are required.' },
      { status: 400 }
    );
  }

  try {
    const db = await getDb();
    const orders = db.collection('orders');

    const result = await orders.insertOne({
      userId: session.user.id,
      name,
      email,
      phone,
      address,
      createdAt: new Date(),
      status: 'pending',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Order placed successfully!',
        orderId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(' Order insert error →', err);
    return NextResponse.json(
      { success: false, message: 'Database error. Please try again.' },
      { status: 500 }
    );
  }
}
