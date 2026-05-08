import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class TeamFilterInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  leagueId?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isFavorite?: boolean;
}
