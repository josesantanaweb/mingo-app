import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Team } from '../../teams/entities/team.entity';

@ObjectType()
export class Tag {
  @Field(() => ID)
  id!: string;

  @Field()
  label!: string;

  @Field(() => [Team], { nullable: true })
  teams?: Team[];
}
