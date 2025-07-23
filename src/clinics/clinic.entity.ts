import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Clinic {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}
