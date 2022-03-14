import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VisitMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    account?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    visitedBy?: string;

    @Field(() => String, {nullable:true})
    visitedByReference?: string;

    @Field(() => Date, {nullable:true})
    whenVisitTookPlace?: Date | string;
}
