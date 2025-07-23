import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Clinic } from '../clinics/clinic.entity';
import { Appointment } from '../appointment/appointment.entity';

@Entity()
export class Dentist {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    passwordHash: string;

    @Column({ default: false })
    isAdmin: boolean;

    @CreateDateColumn()
    createdAt: Date;

    // @ManyToOne(() => Clinic, clinic => clinic.dentists, { onDelete: 'CASCADE' })
    // clinic: Clinic;

    @OneToMany(() => Appointment, (appointment) => appointment.dentist)
    appointments: Appointment[];
}
