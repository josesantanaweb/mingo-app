import { ObjectType, Field, ID, Int, registerEnumType } from '@nestjs/graphql';
import { Schedule, LotteryType } from '@mingo/database';
// import { Bet } from '@/modules/bets/entities/bet.entity';

registerEnumType(Schedule, { name: 'Schedule' });
registerEnumType(LotteryType, { name: 'LotteryType' });

@ObjectType()
export class Draw {
  @Field(() => ID)
  id!: string;

  @Field()
  date!: Date;

  @Field(() => Schedule)
  schedule!: Schedule;

  @Field(() => LotteryType)
  lotteryType!: LotteryType;

  @Field(() => Int, { nullable: true })
  winningNumber?: number | null;

  @Field()
  isProcessed!: boolean;

  // @Field(() => [Bet], { nullable: true })
  // bets?: Bet[];
}
