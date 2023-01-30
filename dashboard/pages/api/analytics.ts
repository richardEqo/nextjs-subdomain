import cookie from "cookie";
import { sign } from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { jwt } from "../../constant";
import { isAuthenticated } from "../../helper/authHelper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204.
    });

    await isAuthenticated(req, res);

    const objUser = { firstName: "Nikunj", lastName: "Maniya" };
    const token = sign(objUser, jwt.JWT_SECRET, {
      expiresIn: jwt.JWT_EXPIRES_IN,
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("auth", token, {
        sameSite: "none",
        secure: true,
      })
    );

    res
      .status(200)
      .json({ message: "Welcome back to the our Dashboard!", token: token });
  } catch (ex: any) {
    res.status(400).json("Error Occurred");
  }
}
