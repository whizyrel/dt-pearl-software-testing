import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_TOKEN, POSTGRES_TOKEN } from './constants/token.constant';
import { MemberNotificationEntity } from './entities/member-notification.entity';
import { PearlMemberEntity } from './entities/pearl-member.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: POSTGRES_TOKEN,
      useFactory: () => {
        const database = 'jordan';
        const host = 'evryword.com.ng';
        const port = 49157;
        const username = 'jordan_dev';
        const password = 'jordan_dev';

        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: [PearlMemberEntity],
          autoLoadEntities: true,
          synchronize: false,
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      name: MONGODB_TOKEN,
      useFactory: () => {
        const database = 'jordan';
        const host = 'evryword.com.ng';
        const port = 27019;
        const username = 'jordan_dev';
        const password = 'jordan_dev';

        return {
          type: 'mongodb',
          host,
          port,
          username,
          password,
          database,
          entities: [MemberNotificationEntity],
          autoLoadEntities: true,
          synchronize: false,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
