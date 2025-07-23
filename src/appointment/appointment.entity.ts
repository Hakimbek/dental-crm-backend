import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Dentist } from 'src/dentists/dentist.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { Patient } from 'src/patients/patient.entity';

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column({ nullable: true })
    reason: string;

    @ManyToOne(() => Dentist, (dentist) => dentist.appointments, { eager: true })
    dentist: Dentist;

    // @ManyToOne(() => Clinic, (clinic) => clinic.appointments, {
    //     eager: true,
    //     onDelete: 'CASCADE'
    // })
    // clinic: Clinic;

    @ManyToOne(() => Patient, (patient) => patient.appointments, { eager: true })
    patient: Patient;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
