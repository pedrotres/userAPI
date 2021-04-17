import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService){

    }

    async validateUser(email: string, senha: string): Promise<any> {
        const user = await this.usuarioService.findOne(email);
        if (user && bcrypt.compareSync(senha, user.senha)) {
          const { senha, ...result } = user;
          return result;
        }
        return null;
      }
}
