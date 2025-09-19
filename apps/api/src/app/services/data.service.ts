import {ExerciseRepository, ExerciseTypeRepository} from '@mentoring/domain';
import {dependency} from '@foal/core';
import locations from '../mock-json/locations.json';

class DataServiceDependencies {
    @dependency
    exerciseRepository!: ExerciseRepository

    @dependency
    exerciseTyeRepository!: ExerciseTypeRepository
}

export class DataService extends DataServiceDependencies {

    async getData(): Promise<ExerciseWithLocation[]> {
        const exercises = await this.exerciseRepository.getExercises();
        const formattedExercises = [];

        for (const exercise of exercises) {
            const type = await this.exerciseTyeRepository.getExerciseType(exercise.type)
            const exerciseLocation = locations.find(loc => loc.id === exercise.location);
            formattedExercises.push({type: exercise.type, duration: exercise.duration, record: type.record, location: exerciseLocation.name})
        }

        return formattedExercises
    }
}



export interface ExerciseWithLocation {
    location: string;
    duration: number;
    type: string;
    record: string;
}