import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@ArgsType()
export class DeleteOneShippingArgs {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;
}
