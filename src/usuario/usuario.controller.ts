import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCreateDto } from './dto/usuario.create.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService,
    private authService: AuthService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<Usuario[]>{
        return this.usuarioService.getAll();
    }

    @Post()
    async create(@Body() data: UsuarioCreateDto): Promise<ResultadoDto>{
        return this.usuarioService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UsuarioCreateDto): Promise<ResultadoDto> {
        return this.usuarioService.update(parseInt(id), data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteone(@Param('id') id: string) {
        return this.usuarioService.deleteOne(id);
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}