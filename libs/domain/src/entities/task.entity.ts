import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Difficulty} from "../types/domain-types";

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'task_name'})
    taskName: string;

    @Column({name: 'task_subtitle'})
    taskSubtitle: string;

    @Column({name: 'task_description'})
    taskDescription: string;

    @Column()
    completed: boolean;

    @Column({name: 'completed_at', nullable: true})
    completedAt?: Date;

    @Column({type: 'enum', enum: Difficulty})
    difficulty: Difficulty;
}