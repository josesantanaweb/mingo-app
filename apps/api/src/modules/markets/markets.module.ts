import { Module } from '@nestjs/common';
import { MarketsService } from '@/modules/markets/markets.service';
import { MarketsResolver } from '@/modules/markets/markets.resolver';

@Module({
  providers: [MarketsResolver, MarketsService],
})
export class MarketsModule {}
