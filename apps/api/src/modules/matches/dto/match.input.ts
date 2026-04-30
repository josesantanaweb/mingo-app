import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { MatchStatus } from '@mingo/database';

@InputType()
export class MatchInput {
  @Field()
  @IsString()
  startDate!: string;

  @Field()
  @IsString()
  homeTeamId!: string;

  @Field()
  @IsString()
  awayTeamId!: string;

  @Field(() => MatchStatus, { nullable: true })
  @IsOptional()
  @IsEnum(MatchStatus)
  status?: MatchStatus;
}
