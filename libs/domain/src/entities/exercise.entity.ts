import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('exercises')
export class Exercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'type'})
    type: string;

    @Column({name: 'duration'})
    duration: number;

    @Column({name: 'location'})
    location: number;
}