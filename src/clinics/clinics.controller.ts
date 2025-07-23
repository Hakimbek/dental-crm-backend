import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    NotFoundException,
    ParseUUIDPipe,
    Patch,
    Delete,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { ClinicDto } from './dto/clinic.dto';
import { Clinic } from './clinic.entity';

@Controller('clinics')
export class ClinicsController {
    constructor(private readonly clinicsService: ClinicsService) {
    }

    @Post()
    createClinic(@Body() dto: ClinicDto): Promise<Clinic> {
        return this.clinicsService.create(dto);
    }

    @Get()
    findAll(): Promise<Clinic[]> {
        return this.clinicsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Clinic> {
        const clinic = await this.clinicsService.findOne(id);
        if (!clinic) throw new NotFoundException(`Clinic with id ${id} not found`);
        return clinic;
    }

    @Patch(':id')
    update(@Param('id', new ParseUUIDPipe()) id: string, @Body() dto: ClinicDto): Promise<Clinic> {
        return this.clinicsService.update(id, dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
        await this.clinicsService.delete(id);
    }
}
