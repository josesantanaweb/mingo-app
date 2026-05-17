import { Mutation, Resolver } from '@nestjs/graphql';
import { SeedService } from '@/modules/seed/seed.service';

@Resolver()
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}

  @Mutation(() => String, { name: 'executeSeed' })
  async executeSeed(): Promise<string> {
    return this.seedService.executeSeed();
  }
}
