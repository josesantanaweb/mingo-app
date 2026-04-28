import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class VerifyEmailInput {
  @Field()
  @IsString()
  userId!: string;

  @Field()
  @IsString()
  code!: string;
}
