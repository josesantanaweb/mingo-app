import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { BetInput } from '@/modules/bets/dto/bet.input';
import type { Bet } from '@/modules/bets/entities/bet.entity';

@Injectable()
export class BetsService {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: Refactor this to a more generic solution if we find more cases of number fields being returned as strings by Prisma.
  private toBetOutput<T extends { odds: unknown; stake: unknown }>(bet: T): T & Pick<Bet, 'odds' | 'stake'> {
    return {
      ...bet,
      odds: Number(bet.odds),
      stake: Number(bet.stake),
    };
  }

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

    return bets.map((bet) => this.toBetOutput(bet));
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

    return bet ? this.toBetOutput(bet) : null;
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

    return this.toBetOutput(bet);
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

    return this.toBetOutput(bet);
  }

  /**
   * Deletes a bet by its identifier.
   * @param id Bet identifier.
   */
  async delete(id: string): Promise<Bet> {
    const bet = await this.prisma.bet.delete({
      where: { id },
    });

    return this.toBetOutput(bet);
  }
}
