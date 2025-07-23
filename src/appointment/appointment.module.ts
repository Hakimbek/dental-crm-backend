import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './appointment.entity';
import { Dentist } from 'src/dentists/dentist.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { Patient } from 'src/patients/patient.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Appointment, Dentist, Clinic, Patient])],
    controllers: [AppointmentController],
    providers: [AppointmentService],
    exports: [AppointmentService],
})
export class AppointmentModule {}
