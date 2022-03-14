import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrustAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    trustRating?: true;

    @Field(() => Boolean, {nullable:true})
    score?: true;
}
