import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationCreateWithoutWalletInput } from './credit-configuration-create-without-wallet.input';

@InputType()
export class CreditConfigurationCreateOrConnectWithoutWalletInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationCreateWithoutWalletInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutWalletInput;
}
