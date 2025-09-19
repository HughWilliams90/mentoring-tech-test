import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('exercise_types')
export class ExerciseType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'type'})
    type: string;

    @Column({name: 'record'})
    record: string;
}