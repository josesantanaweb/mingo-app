import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BetStatus, Prisma } from '@mingo/database';

@InputType()
export class BetInput {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  marketId!: string;

  @Field()
  @IsString()
  matchId!: string;

  @Field()
  @IsString()
  prediction!: string;

  @Field(() => Prisma.Decimal)
  @IsString()
  odds!: string;

  @Field(() => Prisma.Decimal)
  @IsString()
  stake!: string;

  @Field(() => BetStatus, { nullable: true })
  @IsOptional()
  @IsEnum(BetStatus)
  status?: BetStatus;
}
