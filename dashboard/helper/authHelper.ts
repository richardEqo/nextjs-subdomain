import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { AUTH_ERROR_CODE, jwt } from "../constant";

export const isAuthenticated = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return verify(
    req.headers.authorization?.replace("Bearer ", ""),
    jwt.JWT_SECRET,
    async function (err, decoded) {
      if (!err && decoded) {
        return true;
      }

      res.status(401).json({
        data: AUTH_ERROR_CODE,
        message: "Sorry you are not authenticated",
      });
    }
  );
};
