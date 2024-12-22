import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {

    create: jest.fn(dto => {
      return {
        id: Date.now(), // id aléatoire
        ...dto
      };
    }),

    update: jest.fn((id, dto) => ({
      id,
      ...dto
    })),

    findAll: jest.fn(() => [
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

    findOne: jest.fn((id) => ({
        id,
        firstname: 'Amanda',
        lastname: 'Noodle',
        createdAt: new Date(),
        updatedAt: new Date(),
    })),


  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).overrideProvider(UsersService)
    .useValue(mockUsersService)
    .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    expect(controller.create({
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: new Date(),
      updatedAt: new Date(),
    })).toEqual({ 
      id: expect.any(Number),
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it('should update a user', () => {
    const dto = {
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    expect(controller.update('1', dto)).toEqual({ 
      id: 1,
      ...dto
    });
  });

  it('should find all users', () => {
    expect(controller.findAll()).toEqual([
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
    const id = '1';
    expect(controller.findOne(id)).toEqual(
      {id: 1,
      firstname: 'Amanda',
      lastname: 'Noodle',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)},
    );
  });

  it('should remove a user', () => {
  });



  });
