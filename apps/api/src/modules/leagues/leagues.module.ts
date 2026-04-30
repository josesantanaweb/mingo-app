import { Module } from '@nestjs/common';
import { LeaguesService } from '@/modules/leagues/leagues.service';
import { LeaguesResolver } from '@/modules/leagues/leagues.resolver';

@Module({
  providers: [LeaguesResolver, LeaguesService],
})
export class LeaguesModule {}
