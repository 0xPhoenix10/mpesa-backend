import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingCreateInput } from './shipping-create.input';
import { ShippingUpdateInput } from './shipping-update.input';

@ArgsType()
export class UpsertOneShippingArgs {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;

    @Field(() => ShippingCreateInput, {nullable:false})
    create!: ShippingCreateInput;

    @Field(() => ShippingUpdateInput, {nullable:false})
    update!: ShippingUpdateInput;
}
