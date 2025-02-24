import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { DestinationLocation, DestinationType, DestinationStatus } from '../../enums/destination.enum';
import { ObjectId } from 'mongoose';

@InputType()
export class DestinationUpdate {
  @IsNotEmpty()
  @Field(() => String)
  _id: ObjectId;

  @IsOptional()
  @Field(() => DestinationType, { nullable: true })
  destinationType?: DestinationType;

  @IsOptional()
  @Field(() => DestinationStatus, { nullable: true })
  destinationStatus?: DestinationStatus;

  @IsOptional()
  @Field(() => DestinationLocation, { nullable: true })
  destinationLocation?: DestinationLocation;

  @IsOptional()
  @Length(3, 100)
  @Field(() => String, { nullable: true })
  destinationAddress?: string;

  @IsOptional()
  @Length(3, 100)
  @Field(() => String, { nullable: true })
  destinationTitle?: string;

  @IsOptional()
  @Field(() => Number, { nullable: true })
  destinationPrice?: number;

  @IsOptional()
  @Field(() => Number, { nullable: true })
  destinationBeds?: number;

  @IsOptional()
  @Field(() => Number, { nullable: true })
  destinationRooms?: number;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  destinationImages?: string[];

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

  soldAt?: Date;

  deletedAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  constructedAt?: Date;

  sort: string;
  direction: any;
  page: number;
  limit: number;
}
