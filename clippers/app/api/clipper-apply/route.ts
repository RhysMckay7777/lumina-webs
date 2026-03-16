import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const { name, email, socialLinks } = data;
    
    if (!name || !email || !socialLinks) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the application (you can also send to Google Sheets, Discord, etc.)
    console.log("New clipper application:", {
      name,
      email,
      socialLinks,
      submittedAt: new Date().toISOString(),
    });

    // Optional: Send to Google Sheets via Apps Script webhook
    // await fetch(GOOGLE_SHEETS_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Clipper application error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
