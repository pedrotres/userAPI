import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 255 })
  cpf: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 255 })
  senha: string;

  @Column({ length: 10 })
  cep: string;

  @Column({ length: 100 })
  logradouro: string;

  @Column('int')
  numero: number;

  @Column({ length: 50 })
  bairro: string;

  @Column({ length: 50 })
  localidade: string;

  @Column({ length: 2 })
  uf: string;

  @Column({ length: 12 })
  celular: string;
}