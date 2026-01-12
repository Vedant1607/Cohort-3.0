import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function GET(req: NextRequest) {
  const headers = req.headers;
  //@ts-ignore
  const authorizationHeader = headers("authorization");
  //@ts-ignore
  const decoded = jwt.decode(authorizationHeader, "SECRET");
  //@ts-ignore
  const userID = decoded.userID;
  return NextResponse.json({
    avarUrl: "https://images.google/cat.png",
  });
}
