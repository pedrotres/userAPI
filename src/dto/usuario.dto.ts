import { ApiProperty } from "@nestjs/swagger";

export class UsuarioDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    cpf: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    senha: string;

    @ApiProperty()
    cep: string;

    @ApiProperty()
    logradouro: string;

    @ApiProperty()
    numero: number;

    @ApiProperty()
    bairro: string;

    @ApiProperty()
    localidade: string;

    @ApiProperty()
    uf: string;

    @ApiProperty()
    celular: string;
}