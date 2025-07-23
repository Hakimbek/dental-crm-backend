import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Clinic } from '../clinics/clinic.entity';
import { Appointment } from '../appointment/appointment.entity';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    phone: string;

    // @ManyToOne(() => Clinic, clinic => clinic.patients, { onDelete: 'CASCADE', eager: true })
    // clinic: Clinic;

    @OneToMany(() => Appointment, appointment => appointment.patient)
    appointments: Appointment[];
}
