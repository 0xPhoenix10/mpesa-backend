import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutWalletInput } from './credit-configuration-create-without-wallet.input';
import { CreditConfigurationCreateOrConnectWithoutWalletInput } from './credit-configuration-create-or-connect-without-wallet.input';
import { CreditConfigurationUpsertWithWhereUniqueWithoutWalletInput } from './credit-configuration-upsert-with-where-unique-without-wallet.input';
import { CreditConfigurationCreateManyWalletInputEnvelope } from './credit-configuration-create-many-wallet-input-envelope.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithWhereUniqueWithoutWalletInput } from './credit-configuration-update-with-where-unique-without-wallet.input';
import { CreditConfigurationUpdateManyWithWhereWithoutWalletInput } from './credit-configuration-update-many-with-where-without-wallet.input';
import { CreditConfigurationScalarWhereInput } from './credit-configuration-scalar-where.input';

@InputType()
export class CreditConfigurationUncheckedUpdateManyWithoutWalletInput {

    @Field(() => [CreditConfigurationCreateWithoutWalletInput], {nullable:true})
    create?: Array<CreditConfigurationCreateWithoutWalletInput>;

    @Field(() => [CreditConfigurationCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<CreditConfigurationCreateOrConnectWithoutWalletInput>;

    @Field(() => [CreditConfigurationUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<CreditConfigurationUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => CreditConfigurationCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: CreditConfigurationCreateManyWalletInputEnvelope;

    @Field(() => [CreditConfigurationWhereUniqueInput], {nullable:true})
    set?: Array<CreditConfigurationWhereUniqueInput>;

    @Field(() => [CreditConfigurationWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditConfigurationWhereUniqueInput>;

    @Field(() => [CreditConfigurationWhereUniqueInput], {nullable:true})
    delete?: Array<CreditConfigurationWhereUniqueInput>;

    @Field(() => [CreditConfigurationWhereUniqueInput], {nullable:true})
    connect?: Array<CreditConfigurationWhereUniqueInput>;

    @Field(() => [CreditConfigurationUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<CreditConfigurationUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [CreditConfigurationUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<CreditConfigurationUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [CreditConfigurationScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditConfigurationScalarWhereInput>;
}
