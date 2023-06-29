import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MONGODB_TOKEN, POSTGRES_TOKEN } from './constants/token.constant';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource(POSTGRES_TOKEN)
    private readonly dataSource: DataSource,
    @InjectDataSource(MONGODB_TOKEN)
    private readonly mongodbDataSource: DataSource,
  ) {}

  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
