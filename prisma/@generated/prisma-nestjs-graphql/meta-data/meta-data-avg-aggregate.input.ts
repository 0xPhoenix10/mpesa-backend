import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MetaDataAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    maxBuyerOrderAmount?: true;
}
