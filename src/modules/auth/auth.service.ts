import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import * as crypto from 'crypto';

import { User } from 'src/db/entity/user.entity';


@Injectable()
export class AuthService {

  constructor(
    private connection: Connection,
  ) { }

  private get repository(): Repository<User> {
    return this.connection.getRepository(User);
  }

  public async add(user: User): Promise<User> {
    return this.repository.save({
      ...user,
      password: this.encryptPassword(user.password),
    });
  }

  private encryptPassword(password: string): string {
    return crypto.createHash('sha1').update(password).digest('hex');
  }

}
