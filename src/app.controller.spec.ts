import { Test, TestingModule } from '@nestjs/testing';
import { getDataSourceToken } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_TOKEN, POSTGRES_TOKEN } from './constants/token.constant';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getDataSourceToken(POSTGRES_TOKEN),
          useValue: {
            query: jest.fn(() => Promise.resolve([{ now: new Date() }])),
          },
        },
        {
          provide: getDataSourceToken(MONGODB_TOKEN),
          useValue: {
            manager: {
              getMongoRepository: jest.fn(() => ({
                find: jest.fn(() => Promise.resolve([])),
              })),
            },
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).resolves.toBe('Hello World!');
    });
  });
});
