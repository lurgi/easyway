import placesStore from "@/lib/placesStore";
import axios from "axios";
import { NextResponse } from "next/server";

const apiUrl =
  "https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving";

const headers = {
  "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID,
  "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_API_CLIENT_SECRET,
};

export const POST = async (req: Request) => {
  const { departures, arrivals } = await req.json();
  const modiDepartures = `${departures.x},${departures.y}`;
  const modiArrivals = `${arrivals.x},${arrivals.y}`;
  try {
    const res = await axios.get(
      `${apiUrl}?start=${modiDepartures}&goal=${modiArrivals}`,
      {
        headers,
      }
    );
    if (res.status === 200) return NextResponse.json(res.data);
    return new NextResponse(res.data.message, { status: res.status });
  } catch (err: any) {
    return new NextResponse(err.errMessage, { status: 500 });
  }
};
