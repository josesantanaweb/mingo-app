import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { Bet } from '@mingo/database';
import type { BetInput } from './dto/bet.input';

@Injectable()
export class BetsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered bets.
   */
  async findAll(): Promise<Bet[]> {
    return this.prisma.bet.findMany({
      include: {
        match: true,
        market: true,
      },
    });
  }

  /**
   * Finds a bet by its identifier.
   * @param id Unique bet identifier.
   */
  async findById(id: string): Promise<Bet | null> {
    return this.prisma.bet.findUnique({
      where: { id },
      include: {
        match: true,
        market: true,
      },
    });
  }

  /**
   * Creates a new bet.
   * @param input Bet creation data.
   */
  async create(input: BetInput): Promise<Bet> {
    return this.prisma.bet.create({
      data: input,
      include: {
        match: true,
        market: true,
      },
    });
  }

  /**
   * Updates a bet by its id.
   * @param id Bet identifier.
   * @param input New bet data.
   */
  async update(id: string, input: BetInput): Promise<Bet> {
    return this.prisma.bet.update({
      where: { id },
      data: input,
      include: {
        match: true,
        market: true,
      },
    });
  }

  /**
   * Deletes a bet by its identifier.
   * @param id Bet identifier.
   */
  async delete(id: string): Promise<Bet> {
    return this.prisma.bet.delete({
      where: { id },
    });
  }
}
