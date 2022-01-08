export interface IGetAllGFP {
    games: IGetItemGFP[];
};

export interface IGetItemGFP {
    id: number;
    name: string;
    image: string;
    description: string;
    createdAt?: any;
    updatedAt?: any;
};
