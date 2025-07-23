import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dentist } from './dentist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DentistsService {
    constructor(
        @InjectRepository(Dentist)
        private dentistsRepo: Repository<Dentist>,
    ) {}

    findAll() {
        return this.dentistsRepo.find();
    }

    create(data: Partial<Dentist>) {
        const dentist = this.dentistsRepo.create(data);
        return this.dentistsRepo.save(dentist);
    }

    findByEmail(email: string) {
        return this.dentistsRepo.findOne({
            where: { email },
            relations: ['clinics'],
        });
    }
}
