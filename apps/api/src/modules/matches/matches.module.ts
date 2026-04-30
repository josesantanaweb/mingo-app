import { Module } from '@nestjs/common';
import { MatchesService } from '@/modules/matches/matches.service';
import { MatchesResolver } from '@/modules/matches/matches.resolver';

@Module({
  providers: [MatchesResolver, MatchesService],
})
export class MatchesModule {}
