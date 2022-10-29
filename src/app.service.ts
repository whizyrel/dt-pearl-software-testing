import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MONGODB_TOKEN, POSTGRES_TOKEN } from './constants/token.constant';
import { MemberNotificationEntity } from './entities/member-notification.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource(POSTGRES_TOKEN)
    private readonly dataSource: DataSource,
    @InjectDataSource(MONGODB_TOKEN)
    private readonly mongodbDataSource: DataSource,
  ) {}

  async getHello(): Promise<string> {
    console.log(`[SQL]`, await this.dataSource.query(`SELECT NOW()`));
    console.log(
      `[NOSQL]`,
      await this.mongodbDataSource.manager
        .getMongoRepository(MemberNotificationEntity)
        .find({})
        .catch(console.error),
    );

    return 'Hello World!';
  }
}
