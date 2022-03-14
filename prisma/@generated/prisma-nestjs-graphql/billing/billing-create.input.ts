import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutBillingInput } from '../wallet/wallet-create-nested-one-without-billing.input';
import { OrderCreateNestedManyWithoutBillingInput } from '../order/order-create-nested-many-without-billing.input';

@InputType()
export class BillingCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => String, {nullable:true})
    address1?: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    postcode?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => WalletCreateNestedOneWithoutBillingInput, {nullable:true})
    wallet?: WalletCreateNestedOneWithoutBillingInput;

    @Field(() => OrderCreateNestedManyWithoutBillingInput, {nullable:true})
    order?: OrderCreateNestedManyWithoutBillingInput;
}
