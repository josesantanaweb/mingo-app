import { Module } from '@nestjs/common';
import { UsersResolver } from '@/modules/users/users.resolver';
import { UsersService } from '@/modules/users/users.service';

@Module({
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
