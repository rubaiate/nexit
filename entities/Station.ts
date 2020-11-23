import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser'

@Entity('station')
export class Station {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    name!: string;

    @Column('varchar')
    code!: string;

    @Column('int')
    train_line!: number;

    @Column('real')
    lat: number = 0;

    @Column('real')
    lon: number = 0;

    @Column('int')
    station_index: number = 0;

}