import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from './user.entity'
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let mockRepository: Partial<Repository<User>>;
  
  beforeEach(async () => {
    const users: User[] = [];

    mockRepository = {}

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('can create an instance of user service', () => {
    expect(service).toBeDefined();
  });
});
