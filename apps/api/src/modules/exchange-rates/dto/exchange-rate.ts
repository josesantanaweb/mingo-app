import { InputType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class ExchangeRateInput {
  @Field()
  @IsInt()
  rate!: number;

  @Field({ nullable: true })
  date?: Date;
}
