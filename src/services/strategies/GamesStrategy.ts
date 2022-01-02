import debugLib from "debug";
import { IGFPRq } from "../../models/IGFPRq";
import IGFPRs from "../../models/IGFPRs";
import { RequestHeadersModel } from "../../models/IRequestHeaders";
import IGFPStrategy from "../strategy/IGFPStrategy";

const debug = debugLib('gfp:GamesStrategy');

export class GamesStrategy implements IGFPStrategy {
    saveGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGFPRs> {
        try {
            const res: IGFPRs = {
                data:
                {
                    status: 200,
                    description: 'ok'
                }
            }
            return Promise.resolve(res);
        } catch (error) {
            throw error;
        }
    }
    getAllGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGFPRs> {
        throw new Error("Method not implemented.");
    }
    getGFPById(headers: RequestHeadersModel, id: number): Promise<IGFPRs> {
        throw new Error("Method not implemented.");
    }
    updateGFPById(headers: RequestHeadersModel, body: IGFPRq, id: number): Promise<IGFPRs> {
        throw new Error("Method not implemented.");
    }
    deleteGFPById(headers: RequestHeadersModel, id: number): Promise<IGFPRs> {
        throw new Error("Method not implemented.");
    }


}
