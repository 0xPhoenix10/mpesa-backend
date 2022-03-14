import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShippingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    shippingFee?: true;
}
