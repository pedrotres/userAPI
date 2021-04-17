import { Injectable, Inject } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCreateDto } from './dto/usuario.create.dto';
import { switchMap, map, catchError} from 'rxjs/operators';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async getAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  async create(data: UsuarioCreateDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.nome = data.nome;
    usuario.cpf = data.cpf;
    usuario.email = data.email;
    usuario.senha = bcrypt.hashSync(data.senha, 8);
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

  async update(id: number, data: UsuarioCreateDto): Promise<ResultadoDto>{
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

      return this.usuarioRepository.update(id, data).then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: "Usuário atualizado com sucesso"
        }
      }).catch(() => {
        return <ResultadoDto>{
          status: false,
          mensagem: "Ocorreu um erro ao atualizar o Usuário"
        }
      });
  }

    async deleteOne(id: string){
      await this.usuarioRepository.delete( {id: parseInt(id)});
      return {deleted: true};
  }
}