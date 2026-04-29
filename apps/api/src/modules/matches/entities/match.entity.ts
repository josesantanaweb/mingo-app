import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Team } from '../../teams/entities/team.entity';
import { Bet } from '../../bets/entities/bet.entity';

@ObjectType()
export class Match {
  @Field(() => ID)
  id!: string;

  @Field()
  startDate!: Date;

  @Field()
  createdAt!: Date;

  @Field(() => Team)
  homeTeam!: Team;

  @Field(() => Team)
  awayTeam!: Team;

  @Field(() => [Bet], { nullable: true })
  bets?: Bet[];
}
