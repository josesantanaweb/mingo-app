import { ObjectType, Field, ID } from '@nestjs/graphql';
import { League } from '../../leagues/entities/league.entity';
import { Tag } from '../../tags/entities/tag.entity';

@ObjectType()
export class Team {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  logo!: string;

  @Field(() => League, { nullable: true })
  league?: League;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];
}
