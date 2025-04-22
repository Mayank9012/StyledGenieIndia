import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.MONGODB_DB || 'StylTara';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const photographerData: any = {};
    
    for (const [key, value] of formData.entries()) {
      if (key !== 'portfolioFile') {
        if (key === 'agreeToTerms') {
          photographerData[key] = value === 'true';
        } else {
          photographerData[key] = value;
        }
      }
    }
    
    const file = formData.get('portfolioFile') as File | null;
    if (file) {
      const fileBuffer = await file.arrayBuffer();
      
      photographerData.portfolioFile = {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        data: Buffer.from(fileBuffer)
      };
    }
    
    photographerData.createdAt = new Date();
    
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('stylists');
    
    const result = await collection.insertOne(photographerData);
    
    await client.close();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Stylist registered successfully',
      id: result.insertedId 
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error in stylist registration:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to register stylist' 
    }, { status: 500 });
  }
}