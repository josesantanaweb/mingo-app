import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { League } from '@mingo/database';
import type { LeagueInput } from '@/modules/leagues/dto/league.input';

@Injectable()
export class LeaguesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all leagues with their related teams.
   */
  async findAll(): Promise<League[]> {
    return this.prisma.league.findMany({
      include: {
        teams: true,
      }
    });
  }

  /**
   * Finds a league by its identifier.
   * @param id Unique league identifier.
   */
  async findById(id: string): Promise<League | null> {
    return this.prisma.league.findUnique({ 
      where: { id } 
    });
  }

  /**
   * Creates a league using the provided data.
   * @param input League creation data.
   */
  async create(input: LeagueInput): Promise<League> {
    return this.prisma.league.create({ 
      data: input 
    });
  }

  /**
   * Updates an existing league by id.
   * @param id League identifier.
   * @param input New league data.
   */
  async update(id: string, input: LeagueInput): Promise<League> {
    return this.prisma.league.update({ 
      where: { id }, 
      data: input 
    });
  }

  /**
   * Deletes a league by its identifier.
   * @param id League identifier.
   */
  async delete(id: string): Promise<League> {
    return this.prisma.league.delete({ 
      where: { id } 
    });
  }
}
