import { Request, Response } from "express";
import { IGFPRq } from "../../models/IGFPRq";
import IGFPRs from "../../models/IGFPRs";
import { RequestHeadersModel } from "../../models/IRequestHeaders";

export default interface IGFPStrategy {
    saveGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGFPRs>;
    getAllGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGFPRs>;
    getGFPById(headers: RequestHeadersModel, id: number): Promise<IGFPRs>;
    updateGFPById(headers: RequestHeadersModel, body: IGFPRq, id: number): Promise<IGFPRs>;
    deleteGFPById(headers: RequestHeadersModel, id: number): Promise<IGFPRs>;
}