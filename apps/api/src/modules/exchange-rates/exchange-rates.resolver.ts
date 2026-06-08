import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExchangeRatesService } from '@/modules/exchange-rates/exchange-rates.service';
import { ExchangeRate } from '@/modules/exchange-rates/entities/exchange-rate.entity';
import { ExchangeRateInput } from '@/modules/exchange-rates/dto/exchange-rate';

@Resolver(() => ExchangeRate)
export class ExchangeRatesResolver {
  constructor(private readonly exchangeRatesService: ExchangeRatesService) {}

  /**
   * Retrieves all registered Exchange Rate.
   */
  @Query(() => [ExchangeRate], { name: 'exchange-rates' })
  async findAll(): Promise<ExchangeRate[]> {
    return this.exchangeRatesService.findAll();
  }

  /**
   * Finds a Exchange Rate by its identifier.
   * @param id Unique Exchange Rate identifier.
   */
  @Query(() => ExchangeRate, { name: 'exchange-rate', nullable: true })
  async findById(@Args('id') id: string): Promise<ExchangeRate | null> {
    return this.exchangeRatesService.findById(id);
  }

  /**
   * Creates a new Exchange Rate
   * @param input Data required to create the Exchange Rate
   */
  @Mutation(() => ExchangeRate, { name: 'createExchangeRate' })
  async create(@Args('input') input: ExchangeRateInput): Promise<ExchangeRate> {
    return this.exchangeRatesService.create(input);
  }

  /**
   * Updates an existing Exchange Rate.
   * @param id ExchangeRate identifier.
   * @param input New Exchange Rate data.
   */
  @Mutation(() => ExchangeRate, { name: 'updateExchangeRate' })
  async update(@Args('id') id: string, @Args('input') input: ExchangeRateInput): Promise<ExchangeRate> {
    return this.exchangeRatesService.update(id, input);
  }

  /**
   * Deletes a Exchange Rate by its id.
   * @param id Identifier of the Exchange Rate to delete.
   */
  @Mutation(() => ExchangeRate, { name: 'deleteExchangeRate' })
  async delete(@Args('id') id: string): Promise<ExchangeRate> {
    return this.exchangeRatesService.delete(id);
  }
}
