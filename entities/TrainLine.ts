import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser'

@Entity('train_line')
export default class TrainLine {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    name!: string;

    @Column('varchar')
    prefix!: string;

    @Column('int')
    gate_count: number = 0;

    @Column('int')
    station_count: number = 0;

}