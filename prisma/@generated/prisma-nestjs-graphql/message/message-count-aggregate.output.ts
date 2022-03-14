import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageCountAggregate {

    @Field(() => Int, {nullable:false})
    messageId!: number;

    @Field(() => Int, {nullable:false})
    installmentSlices!: number;

    @Field(() => Int, {nullable:false})
    SMS!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    pushNotificationTitle!: number;

    @Field(() => Int, {nullable:false})
    pushNotificationBody!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    language!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
