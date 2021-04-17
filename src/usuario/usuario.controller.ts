import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCreateDto } from './dto/usuario.create.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}


    @Get('findall')
    async findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    @Post('create')
    async create(@Body() data: UsuarioCreateDto): Promise<ResultadoDto>{
        return this.usuarioService.create(data);

    }
}