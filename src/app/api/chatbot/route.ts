// api/chatbot/route.ts
import { NextResponse } from "next/server";

// Define types for messages and sessions
type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
};

type Session = {
  id: string;
  messages: Message[];
  lastActive: number;
};

// In-memory session storage (this will reset when the server restarts)
const sessionStore = new Map<string, Session>();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, sessionId } = body;
    
    if (!message || !sessionId) {
      return NextResponse.json(
        { error: "Message and sessionId are required" },
        { status: 400 }
      );
    }

    console.log(`User (${sessionId}) asked: "${message}"`);
    
    // Check if we have an existing session for this user
    let session: Session | null = sessionStore.get(`fashion_session:${sessionId}`) || null;
    
    // Create a new session if none exists
    if (!session) {
      session = {
        id: sessionId,
        messages: [],
        lastActive: Date.now()
      };
    }
    
    // Add the message to session history
    session.messages.push({
      role: 'user',
      content: message,
      timestamp: Date.now()
    });
    
    // Update the session's last active timestamp
    session.lastActive = Date.now();
    
    // Process the message and generate a reply
    const reply = await generateReply(message, session.messages);
    
    // Add the reply to session history
    session.messages.push({
      role: 'assistant',
      content: reply,
      timestamp: Date.now()
    });
    
    // Save the updated session to our in-memory store
    sessionStore.set(`fashion_session:${sessionId}`, session);

    return NextResponse.json({ 
      reply,
      sessionData: session // Optionally return full session data
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Function to generate a reply based on the message
async function generateReply(message: string, history: Message[]): Promise<string> {
  // For demonstration, we're using manual input as specified in your requirements
  // In a production environment, you would connect to a fashion styling AI or service
  
  // Using readline for manual input from console as per your original code
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\nMessage history:");
  history.slice(-6).forEach((msg) => {
    console.log(`${msg.role === 'user' ? 'User' : 'Bot'}: ${msg.content}`);
  });
  
  return new Promise<string>((resolve) => {
    rl.question("\nEnter reply for this user: ", (answer: string) => {
      rl.close();
      resolve(answer || "I'm sorry, I didn't catch that. Could you please tell me more about what you're looking for?");
    });
  });
  
  // Alternative function for production (without manual input):
  /*
  async function generateReply(message: string, history: Message[]): Promise<string> {
    // Here you would implement your actual chatbot logic
    // For now, let's return a simple response based on the message content
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      return "Hello! How can I help you with fashion advice today?";
    }
    if (message.toLowerCase().includes('style')) {
      return "I'd be happy to help with your style questions! Could you tell me more about your style preferences?";
    }
    // Add more patterns as needed
    return "Thanks for your message! I'm your fashion assistant. How can I help you today?";
  }
  */
}