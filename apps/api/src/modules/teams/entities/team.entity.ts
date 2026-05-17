import { ObjectType, Field, ID, Int, registerEnumType } from '@nestjs/graphql';
import { StreakType } from '@mingo/database';
import { League } from '@/modules/leagues/entities/league.entity';
import { Tag } from '@/modules/tags/entities/tag.entity';

registerEnumType(StreakType, { name: 'StreakType' });

export const FORM_STREAK_TYPES = [StreakType.WIN, StreakType.LOSE, StreakType.DRAW] as const;

@ObjectType()
export class Team {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  logo!: string;

  @Field(() => [StreakType], { nullable: true })
  streak?: StreakType[];

  @Field(() => Boolean, { nullable: true })
  isFavorite?: boolean;

  @Field(() => League, { nullable: true })
  league?: League;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];
}
