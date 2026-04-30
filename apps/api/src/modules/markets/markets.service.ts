import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { Market } from '@mingo/database';
import type { MarketInput } from '@/modules/markets/dto/market.input';

@Injectable()
export class MarketsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered markets.
   */
  async findAll(): Promise<Market[]> {
    return this.prisma.market.findMany();
  }

  /**
   * Finds a market by its identifier.
   * @param id Unique market identifier.
   */
  async findById(id: string): Promise<Market | null> {
    return this.prisma.market.findUnique({ 
      where: { id } 
    });
  }

  /**
   * Creates a new market.
   * @param input Market creation data.
   */
  async create(input: MarketInput): Promise<Market> {
    return this.prisma.market.create({ 
      data: input 
    });
  }

  /**
   * Updates a market by its id.
   * @param id Market identifier.
   * @param input New market data.
   */
  async update(id: string, input: MarketInput): Promise<Market> {
    return this.prisma.market.update({ 
      where: { id }, 
      data: input 
    });
  }

  /**
   * Deletes a market by its identifier.
   * @param id Market identifier.
   */
  async delete(id: string): Promise<Market> {
    return this.prisma.market.delete({ 
      where: { id } 
    });
  }
}
