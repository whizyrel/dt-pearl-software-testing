import { MONGODB_TOKEN } from '../constants/token.constant';
import { Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'member_notification', database: MONGODB_TOKEN })
export class MemberNotificationEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Index({ background: true })
  @Column('string', { unique: false, nullable: false })
  user: string;

  @Index({ background: true })
  @Column('string', { unique: false, nullable: true })
  message: string;

  @Index({ background: true })
  @Column('date', {
    nullable: true,
    transformer: {
      to: (value: string) => {
        if (value) return new Date(value).getTime();

        return new Date().getTime();
      },
      from: (value) => value,
    },
  })
  time: Date;
}
