import { Controller, Get, Post, Body, Param, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { Clinic } from './clinic.entity';

@Controller('clinics')
export class ClinicsController {
    constructor(private readonly clinicsService: ClinicsService) {}

    @Post()
    createClinic(@Body() createClinicDto: CreateClinicDto): Promise<Clinic> {
        return this.clinicsService.createClinic(createClinicDto);
    }

    @Get()
    findAll(): Promise<Clinic[]> {
        return this.clinicsService.findAll();
    }

    @Get(':id')
    async getOneClinic(@Param('id', new ParseUUIDPipe()) id: string): Promise<Clinic> {
        const clinic = await this.clinicsService.findOne(id);
        if (!clinic) throw new NotFoundException(`Clinic with id ${id} not found`);
        return clinic;
    }
}
