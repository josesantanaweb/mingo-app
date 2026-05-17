import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { StreakType } from '@mingo/database';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsOptional,
  IsString,
} from 'class-validator';
import { FORM_STREAK_TYPES } from '@/modules/teams/entities/team.entity';

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

  @Field(() => [StreakType], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsIn(FORM_STREAK_TYPES, { each: true })
  streak?: StreakType[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tagIds?: string[];
}

@InputType()
export class UpdateTeamInput extends PartialType(CreateTeamInput) {}
