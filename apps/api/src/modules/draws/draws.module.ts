import { Module } from '@nestjs/common';
import { DrawsService } from '@/modules/draws/draws.service';
import { DrawsResolver } from '@/modules/draws/draws.resolver';

@Module({
  providers: [DrawsResolver, DrawsService],
})
export class DrawsModule {}
