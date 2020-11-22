export enum Alignment {
    Start,
    End,
    Mid
}

export interface AccessPoint {
    type:string,
    baseGate:number,
    baseGateAlign:Alignment,
    apAlign:Alignment,
    xOffset:number,
    y:number,
    accessDirection:number,
}

export interface Station {
    name:string,
    code:string,
    lat:number,
    lon:number,
    stationIndex:number
    accessPoints:AccessPoint[]
}

