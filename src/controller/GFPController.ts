import { Request, Response } from "express";
import { RequestHeadersModel } from "../models/IRequestHeaders";
import GFPContext from "../services/strategy/GFPContext";

class GFPController {

    public async save(req: Request, res: Response) {
        const requestHeaders = new RequestHeadersModel(req);
        const product = requestHeaders['x-Product'] as string;
        const context = new GFPContext(product);
        const response = await context.saveGFP(requestHeaders, req.body);
        res.status(200).send(response);
    }
}

const gfpController = new GFPController();
export default gfpController;