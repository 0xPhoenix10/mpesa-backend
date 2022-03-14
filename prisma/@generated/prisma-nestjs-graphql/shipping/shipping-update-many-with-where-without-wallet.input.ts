import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingScalarWhereInput } from './shipping-scalar-where.input';
import { ShippingUpdateManyMutationInput } from './shipping-update-many-mutation.input';

@InputType()
export class ShippingUpdateManyWithWhereWithoutWalletInput {

    @Field(() => ShippingScalarWhereInput, {nullable:false})
    where!: ShippingScalarWhereInput;

    @Field(() => ShippingUpdateManyMutationInput, {nullable:false})
    data!: ShippingUpdateManyMutationInput;
}
