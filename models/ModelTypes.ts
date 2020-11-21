export interface TrainLine {
    name:string,
    prefix:string,
    gateCount: number,
    stationCount: number,
}

export interface AccessPoint {
    type:string,
    baseGate:number,
    baseGateAlignment:number,
    xOffset:number,
    y:number,
    accessDirection:number,
}

export interface Station {
    trainLine:TrainLine,
    name:string,
    code:string,
    lat:number,
    lon:number,
    stationIndex:number
    accessPoints:AccessPoint[]
}

