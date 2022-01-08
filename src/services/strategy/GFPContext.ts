import { DefaultResponseDTO } from "../../models/DefaultResponseDTO";
import { IGetAllGFP, IGetItemGFP } from "../../models/IGetAllGFP";
import { IGFPRq } from "../../models/IGFPRq";
import IGFPRs from "../../models/IGFPRs";
import { RequestHeadersModel } from "../../models/IRequestHeaders";
import { GamesStrategy } from "../strategies/GamesStrategy";
import IGFPStrategy from "./IGFPStrategy";

export default class GFPContext {

    protected gfpImplementation!: IGFPStrategy;

    constructor(gfpStrategy: string) {
        switch (gfpStrategy) {
            case 'game':
                this.gfpImplementation = new GamesStrategy();
        }
    }

    public async saveGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<DefaultResponseDTO> {
        try {
            return await this.gfpImplementation.saveGFP(headers, body);
        } catch (error) {
            throw error;
        }
    }

    public async getAllGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGetAllGFP> {
        try {
            return await this.gfpImplementation.getAllGFP(headers, body);
        } catch (error) {
            throw error;
        }
    }

    public async getGFPById(headers: RequestHeadersModel, id: number): Promise<IGetItemGFP |DefaultResponseDTO> {
        try {
            return await this.gfpImplementation.getGFPById(headers, id);
        } catch (error) {
            throw error;
        }
    }

    public async updateGFPById(headers: RequestHeadersModel, body: IGFPRq, id: number): Promise<DefaultResponseDTO> {
        try {
            return await this.gfpImplementation.updateGFPById(headers, body, id);
        } catch (error) {
            throw error;
        }
    }

    public async deleteGFPById(headers: RequestHeadersModel, id: number): Promise<DefaultResponseDTO> {
        try {
            return await this.gfpImplementation.deleteGFPById(headers, id);
        } catch (error) {
            throw error;
        }
    }
}
