import debugLib from "debug";
import { DataDTO } from "../../models/database/DataDTO";
import Game, { GameInput } from "../../models/database/Game/GameDef";
import { DefaultResponseDTO } from "../../models/DefaultResponseDTO";
import { IGFPRq } from "../../models/IGFPRq";
import { RequestHeadersModel } from "../../models/IRequestHeaders";
import IGFPStrategy from "../strategy/IGFPStrategy";

const debug = debugLib('gfp:GamesStrategy');

export class GamesStrategy implements IGFPStrategy {

    public async saveGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<DefaultResponseDTO> {
        const rqUID = headers['X-RqUID'];

        try {
            const bodyToSave: GameInput = {
                name: body.name,
                description: body.description,
                image: body.image
            };
            debug('[Body to save] %j, [Rquid] %s', bodyToSave, rqUID);
    
            const responseDB = await Game.create(bodyToSave);
            debug('[Response BD] %j, [Rquid] %s', responseDB, rqUID);

            return new DefaultResponseDTO(new DataDTO(200, 'Successfully Game creation'));
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
        
    }

    public async getAllGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<any> {
        const rqUID = headers['X-RqUID'];

        try {
            const responseDB = await Game.findAll();
            debug('[Response BD] %j, [Rquid] %s', responseDB, rqUID);
            return responseDB;
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
    }

    public async getGFPById(headers: RequestHeadersModel, id: number): Promise<any> {
        const rqUID = headers['X-RqUID'];
        let responseDB;
        try {
            debug('[Id to find] %j, [Rquid] %s', id, rqUID);
    
            responseDB = await Game.findByPk(id);
            debug('[Response BD] %j, [Rquid] %s', responseDB, rqUID);

            if (!responseDB) {
                responseDB = new DefaultResponseDTO(new DataDTO(404, 'Game not found'));
            }
            
            return responseDB;
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
    }
    updateGFPById(headers: RequestHeadersModel, body: IGFPRq, id: number): Promise<DefaultResponseDTO> {
        throw new Error("Method not implemented.");
    }
    deleteGFPById(headers: RequestHeadersModel, id: number): Promise<DefaultResponseDTO> {
        throw new Error("Method not implemented.");
    }
}
