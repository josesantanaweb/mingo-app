import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { BetStatus, Prisma } from '@mingo/database';
import { Match } from '../../matches/entities/match.entity';
import { Market } from '../../markets/entities/market.entity';

registerEnumType(BetStatus, { name: 'BetStatus' });

@ObjectType()
export class Bet {
  @Field(() => ID)
  id!: string;

  @Field()
  prediction!: string;

  @Field(() => Prisma.Decimal)
  odds!: Prisma.Decimal;

  @Field(() => Prisma.Decimal)
  stake!: Prisma.Decimal;

  @Field()
  createdAt!: Date;

  @Field(() => BetStatus)
  status!: BetStatus;

  @Field(() => Match, { nullable: true })
  match?: Match;

  @Field(() => Market, { nullable: true })
  market?: Market;
}
