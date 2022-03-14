import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingUpdateManyMutationInput } from './shipping-update-many-mutation.input';
import { ShippingWhereInput } from './shipping-where.input';

@ArgsType()
export class UpdateManyShippingArgs {

    @Field(() => ShippingUpdateManyMutationInput, {nullable:false})
    data!: ShippingUpdateManyMutationInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    where?: ShippingWhereInput;
}
