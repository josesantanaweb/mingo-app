import { Module } from '@nestjs/common';
import { TagsService } from '@/modules/tags/tags.service';
import { TagsResolver } from '@/modules/tags/tags.resolver';

@Module({
  providers: [TagsResolver, TagsService],
})
export class TagsModule {}
