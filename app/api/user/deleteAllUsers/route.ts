import prisma from "@lib/prisma";

export async function GET(req: Request) {
    const users = await prisma.user.deleteMany({});    

    return new Response(JSON.stringify(users), {
        status: 200
    });
}