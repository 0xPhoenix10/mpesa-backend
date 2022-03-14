import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VisitMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    account?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    visitedBy?: true;

    @Field(() => Boolean, {nullable:true})
    visitedByReference?: true;

    @Field(() => Boolean, {nullable:true})
    whenVisitTookPlace?: true;
}
