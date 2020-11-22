import { Station } from "../models/ModelTypes";

class TrainLine{
    name:string;
    prefix:string;
    gateCount: number;

    stations:Station[] = []
    stationsMap = new Map<string, Station>()
    constructor(name:string,
        prefix:string,
        gateCount: number){
        this.name = name;
        this.prefix = prefix;
        this.gateCount = gateCount;
    }

    addStation(station:Station){
        this.stations.push(station);
        this.stationsMap.set(station.name, station);
    }

    getStationList(){
        return this.stations
    }

    getStation(name:string){
        return this.stationsMap.get(name)
    }
}

export default TrainLine;