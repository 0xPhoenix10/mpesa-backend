import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    entityId?: true;

    @Field(() => Boolean, {nullable:true})
    entityType?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    isRead?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
