import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCreateWithoutWalletInput } from './billing-create-without-wallet.input';
import { BillingCreateOrConnectWithoutWalletInput } from './billing-create-or-connect-without-wallet.input';
import { BillingCreateManyWalletInputEnvelope } from './billing-create-many-wallet-input-envelope.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';

@InputType()
export class BillingUncheckedCreateNestedManyWithoutWalletInput {

    @Field(() => [BillingCreateWithoutWalletInput], {nullable:true})
    create?: Array<BillingCreateWithoutWalletInput>;

    @Field(() => [BillingCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<BillingCreateOrConnectWithoutWalletInput>;

    @Field(() => BillingCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: BillingCreateManyWalletInputEnvelope;

    @Field(() => [BillingWhereUniqueInput], {nullable:true})
    connect?: Array<BillingWhereUniqueInput>;
}
