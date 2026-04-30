import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MarketsService } from '@/modules/markets/markets.service';
import { Market } from '@/modules/markets/entities/market.entity';
import { MarketInput } from '@/modules/markets/dto/market.input';

@Resolver(() => Market)
export class MarketsResolver {
  constructor(private readonly marketsService: MarketsService) {}

  /**
   * Retrieves all registered markets.
   */
  @Query(() => [Market], { name: 'markets' })
  async findAll(): Promise<Market[]> {
    return this.marketsService.findAll();
  }

  /**
   * Finds a market by its identifier.
   * @param id Unique market identifier.
   */
  @Query(() => Market, { name: 'market', nullable: true })
  async findById(@Args('id') id: string): Promise<Market | null> {
    return this.marketsService.findById(id);
  }

  /**
   * Creates a new market.
   * @param input Data required to create the market.
   */
  @Mutation(() => Market, { name: 'createMarket' })
  async create(@Args('input') input: MarketInput): Promise<Market> {
    return this.marketsService.create(input);
  }

  /**
   * Updates an existing market.
   * @param id Market identifier.
   * @param input New market data.
   */
  @Mutation(() => Market, { name: 'updateMarket' })
  async update(@Args('id') id: string, @Args('input') input: MarketInput): Promise<Market> {
    return this.marketsService.update(id, input);
  }

  /**
   * Deletes a market by its id.
   * @param id Identifier of the market to delete.
   */
  @Mutation(() => Market, { name: 'deleteMarket' })
  async delete(@Args('id') id: string): Promise<Market> {
    return this.marketsService.delete(id);
  }
}
