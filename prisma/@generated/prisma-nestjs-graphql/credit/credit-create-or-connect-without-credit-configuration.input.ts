import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutCreditConfigurationInput } from './credit-create-without-credit-configuration.input';

@InputType()
export class CreditCreateOrConnectWithoutCreditConfigurationInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutCreditConfigurationInput, {nullable:false})
    create!: CreditCreateWithoutCreditConfigurationInput;
}
