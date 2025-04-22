import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.MONGODB_DB || 'StylTara';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }
    
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('photographers');
    
    const photographer = await collection.findOne({ _id: new ObjectId(id) });
    
    await client.close();
    
    if (!photographer) {
      return NextResponse.json({ error: 'Photographer not found' }, { status: 404 });
    }
    
    if (photographer.portfolioFile && photographer.portfolioFile.data) {
      photographer.portfolioFile.data = Buffer.from(photographer.portfolioFile.data.buffer).toString('base64');
    }
    
    return NextResponse.json(photographer);
    
  } catch (error) {
    console.error('Error fetching photographer:', error);
    return NextResponse.json({ 
      error: 'Failed to retrieve photographer data' 
    }, { status: 500 });
  }
}