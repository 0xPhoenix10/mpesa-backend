import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithoutWalletInput } from './credit-configuration-update-without-wallet.input';

@InputType()
export class CreditConfigurationUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationUpdateWithoutWalletInput, {nullable:false})
    data!: CreditConfigurationUpdateWithoutWalletInput;
}
