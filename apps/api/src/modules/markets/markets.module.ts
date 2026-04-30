import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsResolver } from './markets.resolver';

@Module({
  providers: [MarketsResolver, MarketsService],
})
export class MarketsModule {}
