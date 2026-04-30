import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class MatchInput {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  startDate!: string;

  @Field()
  @IsString()
  homeTeamId!: string;

  @Field()
  @IsString()
  awayTeamId!: string;
}
