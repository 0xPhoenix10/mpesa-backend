import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutWalletInput } from './credit-configuration-create-without-wallet.input';
import { CreditConfigurationCreateOrConnectWithoutWalletInput } from './credit-configuration-create-or-connect-without-wallet.input';
import { CreditConfigurationCreateManyWalletInputEnvelope } from './credit-configuration-create-many-wallet-input-envelope.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@InputType()
export class CreditConfigurationUncheckedCreateNestedManyWithoutWalletInput {

    @Field(() => [CreditConfigurationCreateWithoutWalletInput], {nullable:true})
    create?: Array<CreditConfigurationCreateWithoutWalletInput>;

    @Field(() => [CreditConfigurationCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<CreditConfigurationCreateOrConnectWithoutWalletInput>;

    @Field(() => CreditConfigurationCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: CreditConfigurationCreateManyWalletInputEnvelope;

    @Field(() => [CreditConfigurationWhereUniqueInput], {nullable:true})
    connect?: Array<CreditConfigurationWhereUniqueInput>;
}
