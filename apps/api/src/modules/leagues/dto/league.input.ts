import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateLeagueInput {
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

@InputType()
export class UpdateLeagueInput extends PartialType(CreateLeagueInput) {}
