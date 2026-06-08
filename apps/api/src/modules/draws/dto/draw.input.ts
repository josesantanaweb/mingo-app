import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Schedule, LotteryType } from '@mingo/database';

@InputType()
export class DrawInput {
  @Field()
  date!: Date;

  @Field(() => Schedule)
  @IsEnum(Schedule)
  schedule!: Schedule;

  @Field(() => LotteryType)
  @IsEnum(LotteryType)
  lotteryType!: LotteryType;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(99)
  winningNumber?: number;
}
