import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {IsEmail} from 'class-validator';
import {CustomBaseEntity} from "./base.entity";

@Entity('users')
export class UserEntity extends CustomBaseEntity {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({name: 'firstName', type: 'varchar'})
  firstName: string;

  @Column({name: 'lastName', type: 'varchar'})
  lastName: string;

  @Column({name: 'password', type: 'varchar', nullable: true})
  password: string;

  @Column({name: 'email', type: 'varchar'})
  @IsEmail()
  email: string;

  @Column({name: 'age', type: 'int'})
  age: number;
}