import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutCreditConfigurationInput } from './credit-update-without-credit-configuration.input';

@InputType()
export class CreditUpdateWithWhereUniqueWithoutCreditConfigurationInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutCreditConfigurationInput, {nullable:false})
    data!: CreditUpdateWithoutCreditConfigurationInput;
}
