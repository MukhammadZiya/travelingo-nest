import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { DestinationLocation, DestinationStatus, DestinationType } from '../../enums/destination.enum';
import { IsOptional } from 'class-validator';
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

@ObjectType()
export class Destination {
  @Field(() => String)
  _id: ObjectId;

  @Field(() => DestinationType)
  destinationType: DestinationType;

  @Field(() => DestinationStatus)
  destinationStatus: DestinationStatus;

  @Field(() => DestinationLocation)
  destinationLocation: DestinationLocation;

  @Field(() => String)
  destinationAddress: string;

  @Field(() => String)
  destinationTitle: string;

  @Field(() => Number)
  destinationPrice: number;

  @Field(() => Int)
  destinationBeds: number;

  @Field(() => Int)
  destinationRooms: number;

  @Field(() => Int)
  destinationViews: number;

  @Field(() => Int)
  destinationLikes: number;

  @Field(() => Int)
  destinationComments: number;

  @Field(() => Int)
  destinationRank: number;

  @Field(() => [String])
  destinationImages: string[];

  @IsOptional()
  @Field(() => String, { nullable: true })
  destinationDesc?: string;

  @Field(() => String)
  memberId: ObjectId;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  bookedAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  constructedAt?: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Member, { nullable: true })
  memberData?: Member;

  /** from aggregation **/
  @Field(() => [MeLiked], { nullable: true })
  meLiked?: MeLiked[];
}

@ObjectType()
export class Destinations {
  @Field(() => [Destination])
  list: Destination[];

  @Field(() => [TotalCounter], { nullable: true })
  metaCounter: TotalCounter[];
}
