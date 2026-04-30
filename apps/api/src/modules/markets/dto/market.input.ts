import { InputType, Field } from '@nestjs/graphql';
import { BetStatus } from '@mingo/database';
import { IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class MarketInput {
  @Field()
  @IsString()
  name!: string;

  @Field(() => BetStatus, { nullable: true })
  @IsOptional()
  @IsEnum(BetStatus)
  status?: BetStatus;
}
