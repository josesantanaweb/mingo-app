import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@InputType()
export class TeamInput {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  logo!: string;

  @Field()
  @IsString()
  leagueId!: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tagIds?: string[];
}
