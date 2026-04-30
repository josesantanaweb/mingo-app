import { ObjectType, Field, Float, ID, registerEnumType } from '@nestjs/graphql';
import { BetStatus } from '@mingo/database';
import { Match } from '@/modules/matches/entities/match.entity';
import { Market } from '@/modules/markets/entities/market.entity';

registerEnumType(BetStatus, { name: 'BetStatus' });

@ObjectType()
export class Bet {
  @Field(() => ID)
  id!: string;

  @Field()
  prediction!: string;

  @Field(() => Float)
  odds!: number;

  @Field(() => Float)
  stake!: number;

  @Field()
  createdAt!: Date;

  @Field(() => BetStatus)
  status!: BetStatus;

  @Field(() => Match, { nullable: true })
  match?: Match;

  @Field(() => Market, { nullable: true })
  market?: Market;
}
