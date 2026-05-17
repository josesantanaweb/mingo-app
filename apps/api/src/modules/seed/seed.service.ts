import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { loadJson } from '@mingo/database';

interface LeagueSeedData {
  name: string;
  country: string;
  logo: string;
}

interface TeamSeedData {
  league: string;
  name: string;
  logo: string;
  isFavorite?: boolean;
}

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);
  private readonly leagueIdsByName = new Map<string, string>();

  constructor(private readonly prisma: PrismaService) {}

  async executeSeed(): Promise<'success' | 'failed'> {
    try {
      const leaguesResult = await this.seedLeagues();
      const teamsResult = await this.seedTeams();

      this.logger.log(
        `Seed completado: ${leaguesResult.created} ligas creadas, ${leaguesResult.updated} actualizadas, ` +
          `${teamsResult.created} equipos creados, ${teamsResult.updated} actualizados`,
      );

      return 'success';
    } catch (error) {
      this.logger.error('Error durante el seeding:', error);
      return 'failed';
    }
  }

  async seedLeagues(): Promise<{ created: number; updated: number }> {
    const leagues = loadJson<LeagueSeedData[]>('leagues.json');
    let created = 0;
    let updated = 0;

    this.leagueIdsByName.clear();

    for (const league of leagues) {
      try {
        const existing = await this.prisma.league.findFirst({
          where: { name: league.name, country: league.country },
        });

        if (existing) {
          await this.prisma.league.update({
            where: { id: existing.id },
            data: { logo: league.logo },
          });
          this.leagueIdsByName.set(league.name, existing.id);
          updated += 1;
        } else {
          const record = await this.prisma.league.create({
            data: {
              name: league.name,
              country: league.country,
              logo: league.logo,
            },
          });
          this.leagueIdsByName.set(league.name, record.id);
          created += 1;
        }
      } catch (error) {
        this.logger.error(`Error creando liga ${league.name}:`, error);
        throw error;
      }
    }

    return { created, updated };
  }

  async seedTeams(): Promise<{ created: number; updated: number }> {
    const teams = loadJson<TeamSeedData[]>('teams.json');
    let created = 0;
    let updated = 0;

    for (const team of teams) {
      const leagueId = this.leagueIdsByName.get(team.league);

      if (!leagueId) {
        const message = `Liga "${team.league}" no encontrada para el equipo ${team.name}`;
        this.logger.error(message);
        throw new Error(message);
      }

      try {
        const existing = await this.prisma.team.findFirst({
          where: { name: team.name, leagueId },
        });

        if (existing) {
          await this.prisma.team.update({
            where: { id: existing.id },
            data: {
              logo: team.logo,
              isFavorite: team.isFavorite ?? false,
            },
          });
          updated += 1;
        } else {
          await this.prisma.team.create({
            data: {
              name: team.name,
              logo: team.logo,
              leagueId,
              isFavorite: team.isFavorite ?? false,
            },
          });
          created += 1;
        }
      } catch (error) {
        this.logger.error(`Error creando equipo ${team.name}:`, error);
        throw error;
      }
    }

    return { created, updated };
  }
}
