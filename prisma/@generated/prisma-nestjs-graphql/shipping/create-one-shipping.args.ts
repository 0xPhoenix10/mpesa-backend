import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingCreateInput } from './shipping-create.input';

@ArgsType()
export class CreateOneShippingArgs {

    @Field(() => ShippingCreateInput, {nullable:false})
    data!: ShippingCreateInput;
}
