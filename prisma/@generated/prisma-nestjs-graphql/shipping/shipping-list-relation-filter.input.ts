import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';

@InputType()
export class ShippingListRelationFilter {

    @Field(() => ShippingWhereInput, {nullable:true})
    every?: ShippingWhereInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    some?: ShippingWhereInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    none?: ShippingWhereInput;
}
