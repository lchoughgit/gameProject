export interface ICollectionItem {
    gameId? : number;
    imageUrl? : number;
    title? : string;
    platform?: string;
}

export interface IGameDetails {
    gameId? : number;
    title? : string;
    overview? : string;
    releaseDate? : string;
    genres? : string[];
    publishers? : string[],
    platform? : {
        platformId? : string;
        name? : string;
    },
    imageUrl? : string;

}


// {"imageUrl":"https://cdn.thegamesdb.net/images/large/boxart/front/152-2.jpg","gameId":152,"title":"Call of Duty: Modern Warfare 2","platform":"PC"}


// {"gameId":152,"title":"Call of Duty: Modern Warfare 2","overview":"asdfsad.","releaseDate":"2009-11-10T00:00:00","genres":["Shooter"],"publishers":["Activision"],"platform":{"platformId":1,"name":"PC"},"imageUrl":"https://cdn.thegamesdb.net/images/large/boxart/front/152-2.jpg"}