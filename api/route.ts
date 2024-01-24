import { NextRequest } from "next/server";
import { headers } from 'next/headers'
import { cookies } from "next/headers";
export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))

    const theme = request.cookies.get("theme")
    console.log(theme)


    cookies().set("cart", "1")

    return new Response("<h1>propfile data</h1>", {
        headers: {
            "content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })


}