import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { Team } from '@mingo/database';
import type { TeamInput } from './dto/team.input';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all teams with their league and associated tags.
   */
  async findAll(): Promise<Team[]> {
    return this.prisma.team.findMany({
      include: { 
        league: true, 
        tags: true },
    });
  }

  /**
   * Finds a team by id including relations.
   * @param id Unique team identifier.
   */
  async findById(id: string): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: { id },
      include: { 
        league: true, 
        tags: true 
      },
    });
  }

  /**
   * Creates a team in the database.
   * @param input Team creation data.
   */
  async create(input: TeamInput): Promise<Team> {
    const { tagIds, ...teamData } = input;

    return this.prisma.team.create({ 
      data: {
        ...teamData,
        tags: tagIds?.length
          ? {
              connect: tagIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }

  /**
   * Updates a team by its id.
   * @param id Team identifier.
   * @param input New team data.
   */
  async update(id: string, input: TeamInput): Promise<Team> {
    const { tagIds, ...teamData } = input;

    return this.prisma.team.update({ 
      where: { id }, 
      data: {
        ...teamData,
        tags: tagIds
          ? {
              set: tagIds.map((tagId) => ({ id: tagId })),
            }
          : undefined,
      },
    });
  }

  /**
   * Deletes a team by its identifier.
   * @param id Team identifier.
   */
  async delete(id: string): Promise<Team> {
    return this.prisma.team.delete({ 
      where: { id } 
    });
  }
}
