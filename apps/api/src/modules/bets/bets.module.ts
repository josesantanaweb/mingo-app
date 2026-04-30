import { Module } from '@nestjs/common';
import { BetsService } from '@/modules/bets/bets.service';
import { BetsResolver } from '@/modules/bets/bets.resolver';

@Module({
  providers: [BetsResolver, BetsService],
})
export class BetsModule {}
