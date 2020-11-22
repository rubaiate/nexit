import TrainLine from "./TrainLine"

class TrainSystem  {
    trainLines:TrainLine[] = []
    trainLinesMap = new Map<string, TrainLine>()

    addTrainLine(trainLine:TrainLine){
        this.trainLines.push(trainLine);
        this.trainLinesMap.set(trainLine.name, trainLine)
    }

    getTrainLine(name:string){
        return this.trainLinesMap.get(name)
    }
}

export default TrainSystem