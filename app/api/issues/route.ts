import {NextRequest } from "next/server";
import {z} from 'zod';

const createIssueschema = z.object ({
    title : z.string() .min(1).max(225),
    description : z.string() .min(1)
})

export async function POST (request:  NextRequest) {
  const body = await request.json();
  const validation = createIssueschema.safeParse(body)
  if(
   (!validation.success)
   return NextResponse.json (validation.error.errors), {status: 400}

   
  )
}