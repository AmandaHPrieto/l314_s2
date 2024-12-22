import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User
  ) {}

  findAll() {
    return this.usersRepository.findAll<User>();
  }
  
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create<User>(createUserDto as any); // as any proposé par l'autocomplétion pour éviter l'erreur de type 
  }

  findOne(id: number) {
    return this.usersRepository.findOne<User>({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update<User>(updateUserDto, { where: { id } });
  }

  remove(id: number) {
    return this.usersRepository.destroy<User>({ where: { id } });
  } 
}
