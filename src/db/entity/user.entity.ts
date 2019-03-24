import { Entity, Column } from 'typeorm';

import { EntityBase } from 'src/db/entity/base.entity';


@Entity()
export class User extends EntityBase {

  @Column({
    unique: true,
  })
  public email: string;

  @Column()
  public password: string;
}
