import { NextFunction, Request, Response } from "express";

export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("Pass auth");
    next();
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    return;
  }
}
