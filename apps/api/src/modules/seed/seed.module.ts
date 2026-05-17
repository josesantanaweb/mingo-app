import { Module } from '@nestjs/common';
import { SeedService } from '@/modules/seed/seed.service';
import { SeedResolver } from '@/modules/seed/seed.resolver';

@Module({
  providers: [SeedService, SeedResolver],
})
export class SeedModule {}
