import { InputType, Field, Float } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BetStatus } from '@mingo/database';

@InputType()
export class BetInput {
  @Field()
  @IsString()
  marketId!: string;

  @Field()
  @IsString()
  matchId!: string;

  @Field()
  @IsString()
  prediction!: string;

  @Field(() => Float)
  @IsNumber()
  odds!: number;

  @Field(() => Float)
  @IsNumber()
  stake!: number;

  @Field(() => BetStatus, { nullable: true })
  @IsOptional()
  @IsEnum(BetStatus)
  status?: BetStatus;
}
