import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('property')
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    propertyType: string;

    @Column()
    bedrooms: number;

    @Column()
    createdBy: number;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: boolean;
}