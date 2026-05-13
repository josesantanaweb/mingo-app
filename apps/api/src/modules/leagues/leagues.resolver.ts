import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeaguesService } from '@/modules/leagues/leagues.service';
import { League } from '@/modules/leagues/entities/league.entity';
import { CreateLeagueInput, UpdateLeagueInput } from '@/modules/leagues/dto/league.input';

@Resolver(() => League)
export class LeaguesResolver {
  constructor(private readonly leaguesService: LeaguesService) {}

  /**
   * Retrieves all registered leagues.
   */
  @Query(() => [League], { name: 'leagues' })
  async findAll(): Promise<League[]> {
    return this.leaguesService.findAll();
  }

  /**
   * Finds a league by its identifier.
   * @param id Unique league identifier.
   */
  @Query(() => League, { name: 'league', nullable: true })
  async findById(@Args('id') id: string): Promise<League | null> {
    return this.leaguesService.findById(id);
  }

  /**
   * Creates a new league with the provided input data.
   * @param input Required data to create the league.
   */
  @Mutation(() => League, { name: 'createLeague' })
  async create(@Args('input') input: CreateLeagueInput): Promise<League> {
    return this.leaguesService.create(input);
  }

  /**
   * Updates an existing league.
   * @param id Identifier of the league to update.
   * @param input New league data.
   */
  @Mutation(() => League, { name: 'updateLeague' })
  async update(
    @Args('id') id: string,
    @Args('input') input: UpdateLeagueInput,
  ): Promise<League> {
    return this.leaguesService.update(id, input);
  }

  /**
   * Deletes a league by its identifier.
   * @param id Identifier of the league to delete.
   */
  @Mutation(() => League, { name: 'deleteLeague' })
  async delete(@Args('id') id: string): Promise<League> {
    return this.leaguesService.delete(id);
  }
}
