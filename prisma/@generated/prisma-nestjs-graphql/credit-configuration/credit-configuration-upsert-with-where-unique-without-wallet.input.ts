import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithoutWalletInput } from './credit-configuration-update-without-wallet.input';
import { CreditConfigurationCreateWithoutWalletInput } from './credit-configuration-create-without-wallet.input';

@InputType()
export class CreditConfigurationUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationUpdateWithoutWalletInput, {nullable:false})
    update!: CreditConfigurationUpdateWithoutWalletInput;

    @Field(() => CreditConfigurationCreateWithoutWalletInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutWalletInput;
}
