import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BetsService } from '@/modules/bets/bets.service';
import { Bet } from '@/modules/bets/entities/bet.entity';
import { BetInput } from '@/modules/bets/dto/bet.input';

@Resolver(() => Bet)
export class BetsResolver {
  constructor(private readonly betsService: BetsService) {}

  /**
   * Retrieves all registered bets.
   */
  @Query(() => [Bet], { name: 'bets' })
  async findAll(): Promise<Bet[]> {
    return this.betsService.findAll();
  }

  /**
   * Finds a bet by its identifier.
   * @param id Unique bet identifier.
   */
  @Query(() => Bet, { name: 'bet', nullable: true })
  async findById(@Args('id') id: string): Promise<Bet | null> {
    return this.betsService.findById(id);
  }

  /**
   * Creates a new bet.
   * @param input Data required to create the bet.
   */
  @Mutation(() => Bet, { name: 'createBet' })
  async create(@Args('input') input: BetInput): Promise<Bet> {
    return this.betsService.create(input);
  }

  /**
   * Updates an existing bet.
   * @param id Bet identifier.
   * @param input New bet data.
   */
  @Mutation(() => Bet, { name: 'updateBet' })
  async update(@Args('id') id: string, @Args('input') input: BetInput): Promise<Bet> {
    return this.betsService.update(id, input);
  }

  /**
   * Deletes a bet by its id.
   * @param id Identifier of the bet to delete.
   */
  @Mutation(() => Bet, { name: 'deleteBet' })
  async delete(@Args('id') id: string): Promise<Bet> {
    return this.betsService.delete(id);
  }
}
