import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MatchesService } from '@/modules/matches/matches.service';
import { Match } from '@/modules/matches/entities/match.entity';
import { MatchInput } from '@/modules/matches/dto/match.input';

@Resolver(() => Match)
export class MatchesResolver {
  constructor(private readonly matchesService: MatchesService) {}

  /**
   * Retrieves all registered matches.
   */
  @Query(() => [Match], { name: 'matches' })
  async findAll(): Promise<Match[]> {
    return this.matchesService.findAll();
  }

  /**
   * Finds a match by its identifier.
   * @param id Unique match identifier.
   */
  @Query(() => Match, { name: 'match', nullable: true })
  async findById(@Args('id') id: string): Promise<Match | null> {
    return this.matchesService.findById(id);
  }

  /**
   * Creates a new match.
   * @param input Data required to create the match.
   */
  @Mutation(() => Match, { name: 'createMatch' })
  async create(@Args('input') input: MatchInput): Promise<Match> {
    return this.matchesService.create(input);
  }

  /**
   * Updates an existing match.
   * @param id Match identifier.
   * @param input New match data.
   */
  @Mutation(() => Match, { name: 'updateMatch' })
  async update(@Args('id') id: string, @Args('input') input: MatchInput): Promise<Match> {
    return this.matchesService.update(id, input);
  }

  /**
   * Deletes a match by its id.
   * @param id Identifier of the match to delete.
   */
  @Mutation(() => Match, { name: 'deleteMatch' })
  async delete(@Args('id') id: string): Promise<Match> {
    return this.matchesService.delete(id);
  }
}
