import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from '../auth.service';
import { User } from 'src/db/entity/user.entity';


@Controller('auth')
export class LocalStrategyController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('signup')
  async signUp(@Res() res: Response, @Body() user: User) {
    const createdUser: User = await this.authService.add(user);

    res.status(HttpStatus.CREATED).json(createdUser);
  }

}
