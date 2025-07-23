import { IsUUID, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
    @IsDateString()
    date: string;

    @IsOptional()
    @IsString()
    reason?: string;

    @IsUUID()
    dentistId: string;

    @IsUUID()
    clinicId: string;

    @IsUUID()
    patientId: string;
}
