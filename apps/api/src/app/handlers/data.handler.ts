import {dependency} from '@foal/core';
import {DataService, ExerciseWithLocation} from '../services/data.service';

export class DataHandler {
    @dependency
    dataService!: DataService

    async getData(): Promise<ExerciseWithLocation[]> {
        return this.dataService.getData();
    }
}