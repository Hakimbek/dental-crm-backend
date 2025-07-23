import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Clinic {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
