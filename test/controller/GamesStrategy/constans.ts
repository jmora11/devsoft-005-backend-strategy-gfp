export const responseOkCreate = {
    data: {
        description: 'Creación del juego exitosa',
        status: 200
    }
};

export const responseOkUpdate = {
    data: {
        description: 'Actualización del juego exitosa',
        status: 200
    }
};

export const responseOkDelete = {
    data: {
        description: 'Eliminación del juego exitosa',
        status: 200
    }
};

export const responseOkAllGames = {
    games: [
        {
            createdAt: '2022-01-08T21:23:42.000Z',
            description: 'The best game',
            id: 9,
            image: 'FotniteImage',
            name: 'Fortnite',
            updatedAt: '2022-01-08T21:28:21.000Z'
        },
        {
            createdAt: '2022-01-09T18:56:51.000Z',
            description: 'The best game',
            id: 10,
            image: 'Fortnite',
            name: 'FortniteOnline',
            updatedAt: '2022-01-09T18:56:51.000Z'
        }
    ]
};

export const responseOkItemGames = {
    createdAt: '2022-01-09T18:56:51.000Z',
    description: 'The best game',
    id: 10,
    image: 'Fortnite',
    name: 'FortniteOnline',
    updatedAt: '2022-01-09T18:56:51.000Z'
}

export const bodyCreate = {
    description: 'The best game',
    image: 'Fortnite',
    name: 'Fortnite'
};

export const headersGame = {
    'Content-Type': 'application/json',
    'x-custcellphone': '3215060069',
    'x-custidentnum': '1001192129',
    'x-custidenttype': 'CC',
    'x-product': 'game',
    'x-rquid': 'b399dd30-b68c-451e-bfb6-72f16eba9d81',
};
