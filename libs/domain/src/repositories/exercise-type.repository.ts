import {AppDataSource} from "../data-source";
import {ExerciseType} from "../entities/exercise-type.entity";

export class ExerciseTypeRepository {
    private repository = AppDataSource.getRepository(ExerciseType)

    public async getExerciseTypes(): Promise<ExerciseType[]> {
        return this.repository.find();
    }

    public async getExerciseType(type: string): Promise<ExerciseType> {
        return this.repository.findOne({where: {type}});
    }
}