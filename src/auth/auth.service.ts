import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
@Injectable()
export class AuthService {
  async checkPassword(password: string, hash: string): Promise<boolean> {
    return await bcryptjs.compare(password, hash);
  }
}
