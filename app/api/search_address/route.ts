import axios from "axios";
import { NextResponse } from "next/server";

const apiUrl = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";

const headers = {
  "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID,
  "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_API_CLIENT_SECRET,
};

export const POST = async (req: Request) => {
  const { address } = await req.json();

  const params = {
    query: address,
  };
  try {
    const res = await axios.get(apiUrl, {
      headers,
      params,
    });
    return NextResponse.json(res.data.addresses);
  } catch (err: any) {
    return new NextResponse(err.errMessage, { status: 500 });
  }
};
