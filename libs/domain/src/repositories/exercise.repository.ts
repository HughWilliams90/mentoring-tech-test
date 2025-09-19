import {AppDataSource} from "../data-source";
import {Exercise} from "../entities/exercise.entity";

export class ExerciseRepository {
    private repository = AppDataSource.getRepository(Exercise)

    public async getExercises(): Promise<Exercise[]> {
        return this.repository.find();
    }
}