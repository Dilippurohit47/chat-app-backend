import JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response ,next:NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined)
    return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user as AuthUser
    next();
  });
};

export default authMiddleware