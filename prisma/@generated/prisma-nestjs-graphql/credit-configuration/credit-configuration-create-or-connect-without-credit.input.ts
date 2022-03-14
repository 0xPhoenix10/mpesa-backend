import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationCreateWithoutCreditInput } from './credit-configuration-create-without-credit.input';

@InputType()
export class CreditConfigurationCreateOrConnectWithoutCreditInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationCreateWithoutCreditInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutCreditInput;
}
