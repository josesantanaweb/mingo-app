import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { MatchInput } from './dto/match.input';
import type { Match } from './entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered matchs.
   */
  async findAll(): Promise<Match[]> {
    return this.prisma.match.findMany({
      include: {
        homeTeam: true,
        awayTeam: true,
      },
    });
  }

  /**
   * Finds a match by its identifier.
   * @param id Unique match identifier.
   */
  async findById(id: string): Promise<Match | null> {
    return this.prisma.match.findUnique({
      where: { id },
      include: {
        homeTeam: true,
        awayTeam: true,
      },
    });
  }

  /**
   * Creates a new match.
   * @param input Match creation data.
   */
  async create(input: MatchInput): Promise<Match> {
    return this.prisma.match.create({
      data: input,
      include: {
        homeTeam: true,
        awayTeam: true,
      },
    });
  }

  /**
   * Updates a match by its id.
   * @param id Match identifier.
   * @param input New match data.
   */
  async update(id: string, input: MatchInput): Promise<Match> {
    return this.prisma.match.update({
      where: { id },
      data: input,
      include: {
        homeTeam: true,
        awayTeam: true,
      },
    });
  }

  /**
   * Deletes a match by its identifier.
   * @param id Match identifier.
   */
  async delete(id: string): Promise<Match> {
    return this.prisma.match.delete({
      where: { id },
    });
  }
}
