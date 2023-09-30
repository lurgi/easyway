import axios from "axios";
import { NextResponse } from "next/server";

const apiUrl = "https://maps.googleapis.com/maps/api/elevation/json";

export const POST = async (req: Request) => {
  const { x, y } = await req.json();
  try {
    const res = await axios.get(
      `${apiUrl}?locations=${y},${x}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );
    if (res.status === 200) return NextResponse.json(res.data);
    return new NextResponse(res.data.message, { status: res.status });
  } catch (err: any) {
    return new NextResponse(err.errMessage, { status: 500 });
  }
};
