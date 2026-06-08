import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { ExchangeRate } from '@mingo/database';
import type { ExchangeRateInput } from '@/modules/exchange-rates/dto/exchange-rate';

@Injectable()
export class ExchangeRatesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered tags.
   */
  async findAll(): Promise<ExchangeRate[]> {
    return this.prisma.exchangeRate.findMany();
  }

  /**
   * Finds a tag by its identifier.
   * @param id Unique tag identifier.
   */
  async findById(id: string): Promise<ExchangeRate | null> {
    return this.prisma.exchangeRate.findUnique({
      where: { id }
    });
  }

  /**
   * Creates a new tag.
   * @param input ExchangeRate creation data.
   */
  async create(input: ExchangeRateInput): Promise<ExchangeRate> {
    return this.prisma.exchangeRate.create({
      data: input
    });
  }

  /**
   * Updates a tag by its id.
   * @param id ExchangeRate identifier.
   * @param input New tag data.
   */
  async update(id: string, input: ExchangeRateInput): Promise<ExchangeRate> {
    return this.prisma.exchangeRate.update({
      where: { id },
      data: input
    });
  }

  /**
   * Deletes a tag by its identifier.
   * @param id ExchangeRate identifier.
   */
  async delete(id: string): Promise<ExchangeRate> {
    return this.prisma.exchangeRate.delete({
      where: { id }
    });
  }
}
