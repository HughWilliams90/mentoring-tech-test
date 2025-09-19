import { Property } from "./entities/property.entity";
import {AppDataSource} from "./data-source";

export class DomainService {
    public async getData() {
        const property = await AppDataSource.getRepository(Property).find();
        return property;
    }
}