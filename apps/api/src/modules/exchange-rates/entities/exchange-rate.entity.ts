import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class ExchangeRate {
  @Field(() => ID)
  id!: string;

  @Field(() => Float)
  rate!: number;

  @Field()
  date?: Date;
}
