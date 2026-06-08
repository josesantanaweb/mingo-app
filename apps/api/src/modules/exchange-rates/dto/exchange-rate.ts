import { InputType, Field, Float } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class ExchangeRateInput {
  @Field(() => Float)
  @IsInt()
  rate!: number;

  @Field({ nullable: true })
  date?: Date;
}
