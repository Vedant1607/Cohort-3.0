import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // ideally we should check the username and password in the DB and only if it is right we should  return the jwt

  const body = await req.json();
  const username = body.username;
  const password = body.password;

  const userID = 1;
  const token = jwt.sign(
    {
      userID,
    },
    "SECRET"
  );

  return NextResponse.json({
    token,
  });
}
