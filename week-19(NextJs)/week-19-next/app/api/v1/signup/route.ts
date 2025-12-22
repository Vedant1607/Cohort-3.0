import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

  try {
    await prismaClient.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });

    return NextResponse.json({
        message:"You have signed up"
    })
  } catch (err) {
    console.error(err);
    return NextResponse.json({
        error:"Signup failed"
    },{status:500})
  }
}
