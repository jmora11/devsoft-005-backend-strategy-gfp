import { Request, Response } from 'express';
import { measure } from '../decorators/measure';
import { RequestHeadersModel } from '../models/IRequestHeaders';
import GFPContext from '../services/strategy/GFPContext';

class GFPController {

    @measure
    public async create(req: Request, res: Response) {
        const requestHeaders = new RequestHeadersModel(req);
        const product = requestHeaders['x-Product'] as string;
        const context = new GFPContext(product);
        const response = await context.saveGFP(requestHeaders, req.body);
        res.status(200).send(response);
    }

    @measure
    public async getAll(req: Request, res: Response) {
        const requestHeaders = new RequestHeadersModel(req);
        const product = requestHeaders['x-Product'] as string;
        const context = new GFPContext(product);
        const response = await context.getAllGFP(requestHeaders, req.body);
        res.status(200).send(response);
    }

    @measure
    public async getById(req: Request, res: Response) {
        const requestHeaders = new RequestHeadersModel(req);
        const product = requestHeaders['x-Product'] as string;
        const context = new GFPContext(product);
        const response = await context.getGFPById(requestHeaders, +req.params.id);
        res.status(200).send(response);
    }

    @measure
    public async update(req: Request, res: Response) {
        const requestHeaders = new RequestHeadersModel(req);
        const product = requestHeaders['x-Product'] as string;
        const context = new GFPContext(product);
        const response = await context.updateGFPById(requestHeaders, req.body, +req.params.id);
        res.status(200).send(response);
    }

    @measure
    public async delete(req: Request, res: Response) {
        const requestHeaders = new RequestHeadersModel(req);
        const product = requestHeaders['x-Product'] as string;
        const context = new GFPContext(product);
        const response = await context.deleteGFPById(requestHeaders, +req.params.id);
        res.status(200).send(response);
    }
}

const gfpController = new GFPController();
export default gfpController;
