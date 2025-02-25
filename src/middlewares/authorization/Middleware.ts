import { Request, Response, NextFunction } from "express";
import { AuthorizationService } from "./Service";
import { RequestAuthorized } from "./type";

export default async function Authorization(req: RequestAuthorized, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) throw new Error("PE-NLTA");

  try {
    const service = new AuthorizationService();
    const id = await service.decodeJWT(bearerToken);
    const user = await service.getUser(id);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
