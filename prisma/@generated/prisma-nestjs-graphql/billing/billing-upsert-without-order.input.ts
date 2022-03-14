import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingUpdateWithoutOrderInput } from './billing-update-without-order.input';
import { BillingCreateWithoutOrderInput } from './billing-create-without-order.input';

@InputType()
export class BillingUpsertWithoutOrderInput {

    @Field(() => BillingUpdateWithoutOrderInput, {nullable:false})
    update!: BillingUpdateWithoutOrderInput;

    @Field(() => BillingCreateWithoutOrderInput, {nullable:false})
    create!: BillingCreateWithoutOrderInput;
}
