import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './appointment.entity';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Dentist } from 'src/dentists/dentist.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { Patient } from 'src/patients/patient.entity';

@Injectable()
export class AppointmentService {
    constructor(
        @InjectRepository(Appointment)
        private appointmentRepo: Repository<Appointment>,
        @InjectRepository(Dentist)
        private dentistRepo: Repository<Dentist>,
        @InjectRepository(Clinic)
        private clinicRepo: Repository<Clinic>,
        @InjectRepository(Patient)
        private patientRepo: Repository<Patient>,
    ) {}

    async create(dto: CreateAppointmentDto) {
        const dentist = await this.dentistRepo.findOneByOrFail({ id: dto.dentistId });
        const clinic = await this.clinicRepo.findOneByOrFail({ id: dto.clinicId });
        const patient = await this.patientRepo.findOneByOrFail({ id: dto.patientId });

        // const appointment = this.appointmentRepo.create({
        //     ...dto,
        //     date: new Date(dto.date),
        //     dentist,
        //     clinic,
        //     patient,
        // });

        // return this.appointmentRepo.save(appointment);
    }

    findAll() {
        return this.appointmentRepo.find();
    }

    async findOne(id: string) {
        const appointment = await this.appointmentRepo.findOne({ where: { id } });
        if (!appointment) throw new NotFoundException('Appointment not found');
        return appointment;
    }

    async update(id: string, dto: UpdateAppointmentDto) {
        const appointment = await this.findOne(id);

        // if (dto.dentistId) {
        //     appointment.dentist = await this.dentistRepo.findOneByOrFail({ id: dto.dentistId });
        // }
        // if (dto.clinicId) {
        //     appointment.clinic = await this.clinicRepo.findOneByOrFail({ id: dto.clinicId });
        // }
        // if (dto.patientId) {
        //     appointment.patient = await this.patientRepo.findOneByOrFail({ id: dto.patientId });
        // }

        Object.assign(appointment, dto);
        return this.appointmentRepo.save(appointment);
    }

    async remove(id: string) {
        const appointment = await this.findOne(id);
        return this.appointmentRepo.remove(appointment);
    }
}
