import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinic } from './clinic.entity';
import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Clinic])],
    providers: [ClinicsService],
    controllers: [ClinicsController]
})
export class ClinicsModule {}
