import { IsNotEmpty, IsString } from 'class-validator';

export class ClinicDto {
    @IsString({ message: 'Clinic should be a string' })
    @IsNotEmpty({ message: 'Clinic should not be an empty string' })
    name: string;
}
