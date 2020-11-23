import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser'

@Entity('access_points')
export default class AccessPoint {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('int')
    station_id: number

    @Column("varchar")
    type!: string;

    @Column('int')
    base_gate: number = 0;

    @Column('int')
    base_gate_align: number = 0;

    @Column('int')
    ap_align: number = 0;

    @Column('int')
    access_direction: number = 0;

    @Column('int')
    x_offset: number = 0;

    @Column('int')
    y: number = 0;

}