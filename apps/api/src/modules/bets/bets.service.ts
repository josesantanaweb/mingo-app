import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { BetInput } from '@/modules/bets/dto/bet.input';
import type { Bet } from '@/modules/bets/entities/bet.entity';

@Injectable()
export class BetsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered bets.
   */
  async findAll(): Promise<Bet[]> {
    const bets = await this.prisma.bet.findMany({
      include: {
        match: true,
        market: true,
      },
    });

    return bets;
  }

  /**
   * Finds a bet by its identifier.
   * @param id Unique bet identifier.
   */
  async findById(id: string): Promise<Bet | null> {
    const bet = await this.prisma.bet.findUnique({
      where: { id },
      include: {
        match: true,
        market: true,
      },
    });

    return bet;
  }

  /**
   * Creates a new bet.
   * @param input Bet creation data.
   */
  async create(input: BetInput): Promise<Bet> {
    const bet = await this.prisma.bet.create({
      data: input,
      include: {
        match: true,
        market: true,
      },
    });

    return bet;
  }

  /**
   * Updates a bet by its id.
   * @param id Bet identifier.
   * @param input New bet data.
   */
  async update(id: string, input: BetInput): Promise<Bet> {
    const bet = await this.prisma.bet.update({
      where: { id },
      data: input,
      include: {
        match: true,
        market: true,
      },
    });

    return bet;
  }

  /**
   * Deletes a bet by its identifier.
   * @param id Bet identifier.
   */
  async delete(id: string): Promise<Bet> {
    const bet = await this.prisma.bet.delete({
      where: { id },
    });

    return bet;
  }
}
