
import { createConnection } from "typeorm/browser";
import * as FileSystem from "expo-file-system";
import { getRepository } from "typeorm/browser";
import { Asset } from "expo-asset";

import TrainLine from "../entities/TrainLine";

const DB_NAME = "train-lines.db"
class DBLoadService {
    connect = async (uri: any) => {
        return createConnection({
            database: uri,
            driver: require("expo-sqlite"),
            entities: [TrainLine],
            synchronize: true,
            type: "expo",
        });
    };

    downloadDB = async () => {
        console.log("Download database");
        if (
            !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
                .exists
        ) {
            await FileSystem.makeDirectoryAsync(
                FileSystem.documentDirectory + "SQLite"
            );
        }

        await FileSystem.downloadAsync(
            Asset.fromModule(require("../assets/" + DB_NAME)).uri,
            FileSystem.documentDirectory + "SQLite/" + DB_NAME
        );
    }

    initDb = async () => {
        await this.downloadDB();
        await this.connect(DB_NAME);

        const trainLineRepository = getRepository(TrainLine);
        const trainLines = await trainLineRepository.find();
        trainLines.forEach(line => console.log(line))
    };

}

export default DBLoadService;