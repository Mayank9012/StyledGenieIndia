// api/upload-image/route.ts
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { kv } from '@vercel/kv';

// Define the session type
interface SessionImage {
  path: string;
  uploadTime: number;
  mimeType: string;
}

interface UserSession {
  images?: SessionImage[];
  [key: string]: any; // Allow other properties that might exist
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;
    const sessionId = formData.get('sessionId') as string;

    if (!image || !sessionId) {
      return NextResponse.json(
        { error: "Image and sessionId are required" },
        { status: 400 }
      );
    }

    // Create a unique filename
    const fileName = `${uuidv4()}-${image.name}`;
    const mimeType = image.type;
    
    // Store the image reference in the user's session
    try {
      const session = await kv.get(`fashion_session:${sessionId}`) as UserSession || {};
      
      if (session) {
        session.images = session.images || [];
        session.images.push({
          path: `/uploads/${fileName}`,
          uploadTime: Date.now(),
          mimeType
        });
        
        await kv.set(`fashion_session:${sessionId}`, session);
      }
    } catch (error) {
      console.error("Error updating session with image:", error);
    }
    
    // Process the image: In a real app, you'd analyze the image for fashion items
    // Here we'll use readline for manual response as in your original code
    const readline = require('readline');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    console.log(`\nUser (${sessionId}) uploaded an image: ${fileName}`);
    
    const reply = await new Promise<string>((resolve) => {
      rl.question("Enter fashion advice for this image: ", (answer: string) => {
        rl.close();
        resolve(answer || "I see your image! What kind of styling advice are you looking for?");
      });
    });
    
    return NextResponse.json({ 
      success: true, 
      filePath: `/uploads/${fileName}`,
      reply
    });
    
  } catch (error) {
    console.error("Image upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}