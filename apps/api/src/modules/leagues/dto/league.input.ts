import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class LeagueInput {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  country!: string;

  @Field()
  @IsString()
  logo!: string;
}
