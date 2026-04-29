import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BetStatus } from '@mingo/database';
import { Match } from '../../matches/entities/match.entity';


@ObjectType()
export class Bet {
  @Field(() => ID)
  id!: string;

  @Field()
  prediction!: string;

  @Field()
  odds!: number;

  @Field()
  stake!: number;

  @Field()
  createdAt!: Date;

  @Field(() => BetStatus)
  status!: BetStatus;

  @Field(() => [Match], { nullable: true })
  matches?: Match[];
}
