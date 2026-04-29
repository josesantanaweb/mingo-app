import { Resolver } from '@nestjs/graphql';
import { MatchesService } from './matches.service';

@Resolver()
export class MatchesResolver {
  constructor(private readonly matchesService: MatchesService) {}
}
