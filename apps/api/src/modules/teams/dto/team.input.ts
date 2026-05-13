import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTeamInput {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  logo!: string;

  @Field()
  @IsString()
  leagueId!: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isFavorite?: boolean;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tagIds?: string[];
}

@InputType()
export class UpdateTeamInput extends PartialType(CreateTeamInput) {}
