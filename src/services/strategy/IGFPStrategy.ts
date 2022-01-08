import { DefaultResponseDTO } from "../../models/DefaultResponseDTO";
import { IGetAllGFP, IGetItemGFP } from "../../models/IGetAllGFP";
import { IGFPRq } from "../../models/IGFPRq";
import { RequestHeadersModel } from "../../models/IRequestHeaders";

export default interface IGFPStrategy {
    saveGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<DefaultResponseDTO>;
    getAllGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGetAllGFP>;
    getGFPById(headers: RequestHeadersModel, id: number): Promise<IGetItemGFP | DefaultResponseDTO>;
    updateGFPById(headers: RequestHeadersModel, body: IGFPRq, id: number): Promise<DefaultResponseDTO>;
    deleteGFPById(headers: RequestHeadersModel, id: number): Promise<DefaultResponseDTO>;
}
