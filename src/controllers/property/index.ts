import { Request, Response } from "express";

export async function getProperty(req: Request, res: Response) {
  try {
    return res.status(200).send({ status: 200, message: "get property route" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}

export async function createProperty(req: Request, res: Response) {
  try {
    return res
      .status(201)
      .send({ status: 201, message: "create property route" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}

export async function deleteProperty(req: Request, res: Response) {
  try {
    const propertyId = req.params.id;
    console.log(propertyId);
    if (propertyId) {
      return res
        .status(201)
        .send({ status: 200, message: "delete property route" });
    } else {
      return res.status(400).send({ status: 400, message: "Bad request" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}

export async function updateProperty(req: Request, res: Response) {
  try {
    const propertyId = req.params.id;
    console.log(propertyId);
    if (propertyId) {
      return res
        .status(201)
        .send({ status: 200, message: "update property route" });
    } else {
      return res.status(400).send({ status: 400, message: "Bad request" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: 500, message: "internal error" });
  }
}
