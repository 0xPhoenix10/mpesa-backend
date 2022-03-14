import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingScalarWhereInput } from './billing-scalar-where.input';
import { BillingUpdateManyMutationInput } from './billing-update-many-mutation.input';

@InputType()
export class BillingUpdateManyWithWhereWithoutWalletInput {

    @Field(() => BillingScalarWhereInput, {nullable:false})
    where!: BillingScalarWhereInput;

    @Field(() => BillingUpdateManyMutationInput, {nullable:false})
    data!: BillingUpdateManyMutationInput;
}
