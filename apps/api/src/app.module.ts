import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { join, resolve } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { LeaguesModule } from './modules/leagues/leagues.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TagsModule } from './modules/tags/tags.module';
import { BetsModule } from './modules/bets/bets.module';
import { MatchesModule } from './modules/matches/matches.module';
import appConfig from './config/app.config';
import jwtConfig from './config/jwt.config';

const envFilePaths = [
  resolve(process.cwd(), 'apps/api/.env.local'),
  resolve(process.cwd(), 'apps/api/.env'),
  resolve(process.cwd(), '.env.local'),
  resolve(process.cwd(), '.env'),
  resolve(process.cwd(), '../../.env'),
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig],
      envFilePath: envFilePaths,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      introspection: process.env.NODE_ENV !== 'production',
      plugins:
        process.env.NODE_ENV !== 'production'
          ? [ApolloServerPluginLandingPageLocalDefault({ embed: true })]
          : [],
      context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 100,
      },
    ]),
    PrismaModule,
    AuthModule,
    UsersModule,
    LeaguesModule,
    TeamsModule,
    TagsModule,
    BetsModule,
    MatchesModule,
  ],
})
export class AppModule {}
