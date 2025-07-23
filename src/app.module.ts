import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DentistsModule } from './dentists/dentist.module';
import { ClinicsModule } from './clinics/clinics.module';
import { PatientsModule } from './patients/patients.module';
import { Appointment } from './appointment/appointment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      autoLoadEntities: true,
      synchronize: true, // disable on prod
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    // DentistsModule,
    ClinicsModule,
    // PatientsModule,
    // Appointment
  ],
})
export class AppModule {}
