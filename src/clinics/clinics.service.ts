import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinic } from './clinic.entity';
import { Repository } from 'typeorm';
import { ClinicDto } from './dto/clinic.dto';

@Injectable()
export class ClinicsService {
    constructor(
        @InjectRepository(Clinic)
        private clinicRepository: Repository<Clinic>,
    ) {
    }

    async create(dto: ClinicDto): Promise<Clinic> {
        try {
            const clinic = this.clinicRepository.create(dto);
            return await this.clinicRepository.save(clinic);
        } catch (error) {
            throw new InternalServerErrorException('Could not create clinic');
        }
    }

    findAll(): Promise<Clinic[]> {
        return this.clinicRepository.find();
    }

    async findOne(id: string): Promise<Clinic | null> {
        return this.clinicRepository.findOne({where: {id}});
    }

    async update(id: string, dto: ClinicDto): Promise<Clinic> {
        const clinic = await this.clinicRepository.findOne({where: {id}});
        if (!clinic) throw new NotFoundException('Clinic not found');

        const updated = this.clinicRepository.merge(clinic, dto);
        return this.clinicRepository.save(updated);
    }

    async delete(id: string): Promise<void> {
        const clinic = await this.clinicRepository.findOne({where: {id}});
        if (!clinic) throw new NotFoundException(`Clinic with id ${id} not found`);
        await this.clinicRepository.remove(clinic);
    }
}
