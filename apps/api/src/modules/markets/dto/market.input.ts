import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class MarketInput {
  @Field()
  @IsString()
  name!: string;
}
