import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { DentistsService } from './dentists.service';
import { Dentist } from './dentist.entity';

@Controller('dentists')
export class DentistsController {
    constructor(private readonly dentistsService: DentistsService) {}

    @Get()
    findAll(): Promise<Dentist[]> {
        return this.dentistsService.findAll();
    }

    @Post()
    create(@Body() body: Partial<Dentist>) {
        return this.dentistsService.create(body);
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string) {
        const dentist = await this.dentistsService.findByEmail(email);
        if (!dentist) throw new NotFoundException(`Dentist with email ${email} not found`);
        return dentist;
    }
}