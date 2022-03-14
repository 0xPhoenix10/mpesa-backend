import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCreateWithoutWalletInput } from './billing-create-without-wallet.input';
import { BillingCreateOrConnectWithoutWalletInput } from './billing-create-or-connect-without-wallet.input';
import { BillingUpsertWithWhereUniqueWithoutWalletInput } from './billing-upsert-with-where-unique-without-wallet.input';
import { BillingCreateManyWalletInputEnvelope } from './billing-create-many-wallet-input-envelope.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingUpdateWithWhereUniqueWithoutWalletInput } from './billing-update-with-where-unique-without-wallet.input';
import { BillingUpdateManyWithWhereWithoutWalletInput } from './billing-update-many-with-where-without-wallet.input';
import { BillingScalarWhereInput } from './billing-scalar-where.input';

@InputType()
export class BillingUpdateManyWithoutWalletInput {

    @Field(() => [BillingCreateWithoutWalletInput], {nullable:true})
    create?: Array<BillingCreateWithoutWalletInput>;

    @Field(() => [BillingCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<BillingCreateOrConnectWithoutWalletInput>;

    @Field(() => [BillingUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<BillingUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => BillingCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: BillingCreateManyWalletInputEnvelope;

    @Field(() => [BillingWhereUniqueInput], {nullable:true})
    set?: Array<BillingWhereUniqueInput>;

    @Field(() => [BillingWhereUniqueInput], {nullable:true})
    disconnect?: Array<BillingWhereUniqueInput>;

    @Field(() => [BillingWhereUniqueInput], {nullable:true})
    delete?: Array<BillingWhereUniqueInput>;

    @Field(() => [BillingWhereUniqueInput], {nullable:true})
    connect?: Array<BillingWhereUniqueInput>;

    @Field(() => [BillingUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<BillingUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [BillingUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<BillingUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [BillingScalarWhereInput], {nullable:true})
    deleteMany?: Array<BillingScalarWhereInput>;
}
