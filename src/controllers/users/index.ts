import { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
  try {
    return res.status(200).send({ status: 200, message: "get User route" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    return res.status(201).send({ status: 201, message: "create User route" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    if (userId) {
      return res
        .status(201)
        .send({ status: 200, message: "delete User route" });
    } else {
      return res.status(400).send({ status: 400, message: "Bad request" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    if (userId) {
      return res
        .status(201)
        .send({ status: 200, message: "update User route" });
    } else {
      return res.status(400).send({ status: 400, message: "Bad request" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}
