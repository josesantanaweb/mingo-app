import { Module } from '@nestjs/common';
import { TeamsService } from '@/modules/teams/teams.service';
import { TeamsResolver } from '@/modules/teams/teams.resolver';

@Module({
  providers: [TeamsResolver, TeamsService],
})
export class TeamsModule {}
