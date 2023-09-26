import { NextResponse } from "next/server";

const POST = (req: Request) => {
  return NextResponse.json({ ok: true });
};

export default POST;
