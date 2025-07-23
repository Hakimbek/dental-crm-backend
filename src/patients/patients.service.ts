import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { Repository } from 'typeorm';
import { Clinic } from '../clinics/clinic.entity';

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepo: Repository<Patient>,
        @InjectRepository(Clinic)
        private readonly clinicRepo: Repository<Clinic>,
    ) {}

    async create(name: string, phone: string, clinicId: string) {
        const clinic = await this.clinicRepo.findOne({ where: { id: clinicId } });
        if (!clinic) throw new NotFoundException('Clinic not found');

        // const patient = this.patientRepo.create({ name, phone, clinic });
        // return this.patientRepo.save(patient);
    }

    findAll() {
        return this.patientRepo.find({ relations: ['clinic'] });
    }

    findById(id: string) {
        return this.patientRepo.findOne({ where: { id }, relations: ['clinic'] });
    }

    async remove(id: string) {
        const patient = await this.patientRepo.findOneBy({ id });
        if (!patient) throw new NotFoundException('Patient not found');
        return this.patientRepo.remove(patient);
    }
}
