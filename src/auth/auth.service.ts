import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.findByEmail(email);
      if (user && bcrypt.compareSync(password, user.password)) {
        return user;
      } else {
        throw new HttpException('Forbbiden', HttpStatus.FORBIDDEN);
      }
    } catch (error) {
      throw new HttpException('Forbbiden', HttpStatus.FORBIDDEN);
    }
  }
}
