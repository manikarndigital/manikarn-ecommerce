import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // 👈 yahan import karna hai

export async function GET() {
  try {
    // DB se ek chhota query: users table me se 1 record
    const users = await prisma.user.findMany({ take: 1 });

    return NextResponse.json({
      ok: true,
      message: "Database connected ✅",
      userCount: users.length,
      sampleUser: users[0] ?? null,
    });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
