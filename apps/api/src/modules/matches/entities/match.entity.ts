import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { MatchStatus } from '@mingo/database';
import { Team } from '../../teams/entities/team.entity';
import { Bet } from '../../bets/entities/bet.entity';

registerEnumType(MatchStatus, { name: 'MatchStatus' });

@ObjectType()
export class Match {
  @Field(() => ID)
  id!: string;

  @Field()
  startDate!: Date;

  @Field()
  createdAt!: Date;

  @Field(() => Team, { nullable: true })
  homeTeam?: Team;

  @Field(() => Team, { nullable: true })
  awayTeam?: Team;

  @Field(() => [Bet], { nullable: true })
  bets?: Bet[];

  @Field(() => MatchStatus)
  status!: MatchStatus;
}
