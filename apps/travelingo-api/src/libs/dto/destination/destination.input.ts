import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { DestinationLocation, DestinationStatus, DestinationType } from '../../enums/destination.enum';
import { ObjectId } from 'mongoose';
import { availableOptions, availableAgentSorts } from '../../config';
import { Direction } from '../../enums/common.enum';

@InputType()
export class DestinationInput {
  @IsNotEmpty()
  @Field(() => DestinationType)
  destinationType: DestinationType;

  @IsNotEmpty()
  @Field(() => DestinationLocation)
  destinationLocation: DestinationLocation;

  @IsNotEmpty()
  @Length(3, 100)
  @Field(() => String)
  destinationAddress: string;

  @IsNotEmpty()
  @Length(3, 100)
  @Field(() => String)
  destinationTitle: string;

  @IsNotEmpty()
  @Field(() => Number)
  destinationPrice: number;

  @IsNotEmpty()
  @Field(() => Int)
  destinationBeds: number;

  @IsNotEmpty()
  @Field(() => Int)
  destinationRooms: number;

  @IsNotEmpty()
  @Field(() => [String])
  destinationImages: string[];

  @IsOptional()
  @Length(5, 500)
  @Field(() => String, { nullable: true })
  destinationDesc?: string;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  destinationBarter?: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  destinationRent?: boolean;

  memberId?: ObjectId;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  constructedAt?: Date;
}

@InputType()
export class PricesRange {
  @Field(() => Int)
  start: number;

  @Field(() => Int)
  end: number;
}

@InputType()
export class SquaresRange {
  @Field(() => Int)
  start: number;

  @Field(() => Int)
  end: number;
}

@InputType()
export class PeriodsRange {
  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;
}

@InputType()
class DestinationSearch {
  @IsOptional()
  @Field(() => String, { nullable: true })
  memberId?: ObjectId;

  @IsOptional()
  @Field(() => [DestinationLocation], { nullable: true })
  locationList?: DestinationLocation[];

  @IsOptional()
  @Field(() => [DestinationType], { nullable: true })
  typeList?: DestinationType[];

  @IsOptional()
  @Field(() => [Int], { nullable: true })
  roomsList?: Number[];

  @IsOptional()
  @Field(() => [Int], { nullable: true })
  bedsList?: Number[];

  @IsOptional()
  @IsIn(availableOptions, { each: true })
  @Field(() => [String], { nullable: true })
  options?: string[];

  @IsOptional()
  @Field(() => PricesRange, { nullable: true })
  pricesRange?: PricesRange;

  @IsOptional()
  @Field(() => PeriodsRange, { nullable: true })
  periodsRange?: PeriodsRange;

  @IsOptional()
  @Field(() => SquaresRange, { nullable: true })
  squaresRange?: SquaresRange;

  @IsOptional()
  @Field(() => String, { nullable: true })
  text?: string;
}

@InputType()
export class DestinationsInquiry {
  @IsNotEmpty()
  @Min(1)
  @Field(() => Int)
  page: number;

  @IsNotEmpty()
  @Min(1)
  @Field(() => Int)
  limit: number;

  @IsOptional()
  @IsIn(availableAgentSorts)
  @Field(() => String, { nullable: true })
  sort?: string;

  @IsOptional()
  @Field(() => Direction, { nullable: true })
  direction?: Direction;

  @IsNotEmpty()
  @Field(() => DestinationSearch)
  search: DestinationSearch;
}
