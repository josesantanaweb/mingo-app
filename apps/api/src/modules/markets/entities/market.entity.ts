import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Bet } from '@/modules/bets/entities/bet.entity';

@ObjectType()
export class Market {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => [Bet], { nullable: true })
  bets?: Bet[];
}
