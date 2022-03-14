import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingUpdateInput } from './shipping-update.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@ArgsType()
export class UpdateOneShippingArgs {

    @Field(() => ShippingUpdateInput, {nullable:false})
    data!: ShippingUpdateInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;
}
