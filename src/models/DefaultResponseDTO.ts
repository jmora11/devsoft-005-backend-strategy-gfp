import { DataDTO } from './database/DataDTO';

export class DefaultResponseDTO {
    public data: DataDTO;

    constructor(data: DataDTO) {
        this.data = data;
    }
}
