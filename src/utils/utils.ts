import { DataDTO } from '../models/database/DataDTO';
import { DefaultResponseDTO } from '../models/DefaultResponseDTO';

export default class Utils {

    public static generateResponse(status: number, message: string): DefaultResponseDTO {
        return new DefaultResponseDTO(new DataDTO(status, message));
    }
}
