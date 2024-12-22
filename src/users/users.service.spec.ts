import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockUsersRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    update: jest.fn().mockImplementation(dto => dto),
    findAll: jest.fn().mockImplementation(() => [
      {id: 1,
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: new Date(),
      updatedAt: new Date()},
      {id: 2,
      firstname: 'Silvie',
      lastname: 'Spaghetti',
      createdAt: new Date(),
      updatedAt: new Date()},
    ]),
    findOne: jest.fn().mockImplementation(id => ({
        id: 1,
        firstname: 'Amanda',
        lastname: 'Noodle',
        createdAt: new Date(),
        updatedAt: new Date(),
    })),
    destroy: jest.fn().mockImplementation(() => ({ affected: 1 })),
  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, 
        {
          provide: 'USERS_REPOSITORY',
          useValue: mockUsersRepository
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    expect(service.create({
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: new Date(),
      updatedAt: new Date()
    })).toEqual({
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it('should update a user', () => {
    const dto = {
      id: 1,
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    expect(service.update(1, dto)).toEqual({ 
      id: 1,
      ...dto
    });
  });

  it('should find all users', () => {
    expect(service.findAll()).toEqual([
      {id: 1,
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)},
      {id: 2,
      firstname: 'Silvie',
      lastname: 'Spaghetti',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)},
    ]);
  });

  it('should find a user', () => {
    const id = 1;
    expect(service.findOne(id)).toEqual(
      {id: 1,
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)},
    );
  });

  it('should remove a user', () => {
    const id = 1;
    expect(service.destroy(id)).toEqual(1);
  });
  


});
