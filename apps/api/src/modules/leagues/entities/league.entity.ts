import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Team } from '@/modules/teams/entities/team.entity';

@ObjectType()
export class League {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  country!: string;

  @Field()
  logo!: string;

  @Field(() => [Team], { nullable: true })
  teams?: Team[];

  @Field()
  createdAt!: Date;
}
