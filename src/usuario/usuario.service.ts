import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCreateDto } from './dto/usuario.create.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  async create(data: UsuarioCreateDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.nome = data.nome;
    usuario.cpf = data.cpf;
    usuario.email = data.email;
    usuario.senha = data.senha;
    usuario.cep = data.cep;
    usuario.logradouro = data.logradouro;
    usuario.numero = data.numero;
    usuario.bairro = data.bairro;
    usuario.localidade = data.localidade;
    usuario.uf = data.uf;
    usuario.celular = data.celular;

    return this.usuarioRepository.save(usuario).then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Usuário cadastrado com sucesso"
      }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Ocorreu um erro ao cadastrar o Usuário"
      }
    })

    
  }
}