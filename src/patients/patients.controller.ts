import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Post()
    create(
        @Body('name') name: string,
        @Body('phone') phone: string,
        @Body('clinicId') clinicId: string,
    ) {
        return this.patientsService.create(name, phone, clinicId);
    }

    @Get()
    findAll() {
        return this.patientsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.patientsService.findById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.patientsService.remove(id);
    }
}
