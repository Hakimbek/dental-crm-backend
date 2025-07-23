import { IsNotEmpty, IsString } from 'class-validator';

export class ClinicDto {
    @IsString({ message: 'Clinic name should be a string' })
    @IsNotEmpty({ message: 'Clinic name should not be an empty string' })
    name: string;

    @IsString({ message: 'Clinic address should be a string' })
    @IsNotEmpty({ message: 'Clinic address should not be an empty string' })
    address: string;

    @IsString({ message: 'Clinic phone should be a string' })
    @IsNotEmpty({ message: 'Clinic phone should not be an empty string' })
    phone: string;
}
