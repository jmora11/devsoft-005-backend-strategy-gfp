import debugLib from "debug";
import { DataDTO } from "../../models/database/DataDTO";
import Game, { GameInput } from "../../models/database/Game/GameDef";
import { DefaultResponseDTO } from "../../models/DefaultResponseDTO";
import { IGetAllGFP, IGetItemGFP } from "../../models/IGetAllGFP";
import { IGFPRq } from "../../models/IGFPRq";
import { RequestHeadersModel } from "../../models/IRequestHeaders";
import { STATUS_CODE_NOT_FOUND, STATUS_CODE_OK } from "../../utils/constans";
import Utils from "../../utils/utils";
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
            debug('[Juego a guardar] %j, [Rquid] %s', bodyToSave, rqUID);
    
            const responseDB = await Game.create(bodyToSave);
            debug('[Respuesta de la BD] %j, [Rquid] %s', responseDB, rqUID);

            return Utils.generateResponse(200, 'Creación del juego exitosa');
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
        
    }

    public async getAllGFP(headers: RequestHeadersModel, body: IGFPRq): Promise<IGetAllGFP> {
        const rqUID = headers['X-RqUID'];

        try {
            const responseDB = await Game.findAll();
            debug('[Respuesta de la BD] %j, [Rquid] %s', responseDB, rqUID);
            return { games: responseDB };
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
    }

    public async getGFPById(headers: RequestHeadersModel, id: number): Promise<IGetItemGFP | DefaultResponseDTO> {
        const rqUID = headers['X-RqUID'];
        let responseDB;
        try {
            debug('[Id buscado] %s, [Rquid] %s', id, rqUID);
    
            responseDB = await Game.findByPk(id);
            debug('[Respuesta de la BD] %j, [Rquid] %s', responseDB, rqUID);

            if (!responseDB) {
                responseDB = Utils.generateResponse(404, 'Game not found');
            }
            
            return responseDB;
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
    }

    public async updateGFPById(headers: RequestHeadersModel, body: IGFPRq, id: number): Promise<DefaultResponseDTO> {

        const rqUID = headers['X-RqUID'];
        let status = STATUS_CODE_NOT_FOUND;
        let description = 'El juego no fue encontrado';

        try {
            debug('[Id buscado] %s, [Rquid] %s', id, rqUID);
            const game = await Game.findByPk(id);

            if (game) {
                status = STATUS_CODE_OK;
                description = 'Actualización del juego exitosa';

                debug('[Juego encontrado] %j, [Rquid] %s', game, rqUID);
                const updateGame = await game.update(body);
                debug('[Juego actualizado] %j, [Rquid] %s', updateGame, rqUID);
            }
            
            return Utils.generateResponse(status, description);
        } catch (error:any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
    }

    public async deleteGFPById(headers: RequestHeadersModel, id: number): Promise<DefaultResponseDTO> {

        const rqUID = headers['X-RqUID'];
        let status = STATUS_CODE_NOT_FOUND;
        let description = 'El juego no fue encontrado';

        try {
            const deletedGame = await Game.destroy({
                where: { id }
            });

            if(!!deletedGame) {
                status = STATUS_CODE_OK;
                description = 'Eliminación del juego exitosa'; 
            };

            return Utils.generateResponse(status, description);
        } catch (error: any) {
            debug('[Error] %s, [Rquid %s]', error.errors[0].message, rqUID);
            throw {statusCode: 500, message: error.errors[0].message};
        }
    }
}
