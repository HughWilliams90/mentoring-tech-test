import {AppDataSource} from "./data-source";

export const initdb = async () => {
    try {
        await AppDataSource.initialize()
    } catch (error) {
        console.log(error)
    }
}