import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamsService } from './teams.service';
import { Team } from './entities/team.entity';
import { TeamInput } from './dto/team.input';

@Resolver(() => Team)
export class TeamsResolver {
  constructor(private readonly teamsService: TeamsService) {}

  /**
   * Retrieves all available teams.
   */
  @Query(() => [Team], { name: 'teams' })
  async findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  /**
   * Finds a team by its identifier.
   * @param id Unique team identifier.
   */
  @Query(() => Team, { name: 'team', nullable: true })
  async findById(@Args('id') id: string): Promise<Team | null> {
    return this.teamsService.findById(id);
  }

  /**
   * Creates a new team.
   * @param input Team creation data.
   */
  @Mutation(() => Team, { name: 'createTeam' })
  async create(@Args('input') input: TeamInput): Promise<Team> {
    return this.teamsService.create(input);
  }

  /**
   * Updates an existing team.
   * @param id Team identifier.
   * @param input New team data.
   */
  @Mutation(() => Team, { name: 'updateTeam' })
  async update(@Args('id') id: string, @Args('input') input: TeamInput): Promise<Team> {
    return this.teamsService.update(id, input);
  }

  /**
   * Deletes a team by its id.
   * @param id Identifier of the team to delete.
   */
  @Mutation(() => Team, { name: 'deleteTeam' })
  async delete(@Args('id') id: string): Promise<Team> {
    return this.teamsService.delete(id);
  }
}
