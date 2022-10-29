import { POSTGRES_TOKEN } from '../constants/token.constant';
import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index(['id', 'time'], { unique: true })
export abstract class TestBaseEntity extends BaseEntity {
  @Index({ unique: true })
  @PrimaryColumn({
    type: 'uuid',
    unique: true,
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Index()
  @Column('timestamp without time zone', {
    nullable: false,
    default: () => 'now()',
  })
  time: Date;
}

@Entity({ database: POSTGRES_TOKEN })
@Index(['name', 'email'])
export class PearlMemberEntity extends TestBaseEntity {
  @Index({ fulltext: true })
  @Column('text', { nullable: false })
  name: string;

  @Index({ unique: true, fulltext: true })
  @Column('text', { unique: true, nullable: false })
  email: string;
}
