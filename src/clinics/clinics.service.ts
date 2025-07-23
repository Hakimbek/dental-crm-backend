import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinic } from './clinic.entity';
import { Repository } from 'typeorm';
import { CreateClinicDto } from './dto/create-clinic.dto';

@Injectable()
export class ClinicsService {
    constructor(
        @InjectRepository(Clinic)
        private clinicRepository: Repository<Clinic>,
    ) {}

    async createClinic(createClinicDto: CreateClinicDto): Promise<Clinic> {
        try {
            const clinic = this.clinicRepository.create(createClinicDto);
            return await this.clinicRepository.save(clinic);
        } catch (error) {
            throw new InternalServerErrorException('Could not create clinic');
        }
    }

    findAll(): Promise<Clinic[]> {
        return this.clinicRepository.find();
    }

    async findOne(id: string): Promise<Clinic | null> {
        return this.clinicRepository.findOne({where: { id }});
    }
}
