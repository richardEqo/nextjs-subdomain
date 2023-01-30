import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { isAuthenticated } from "../../helper/authHelper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200,
    });
    const hasAccess: any = await isAuthenticated(req, res);
    if (!hasAccess) return;

    res.status(200).json({
      message: "User Profile",
      data: {
        firstName: "Nikunj",
        lastName: "Maniya",
      },
    });
  } catch (ex: any) {
    res.status(400).json("Error Occurred");
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
