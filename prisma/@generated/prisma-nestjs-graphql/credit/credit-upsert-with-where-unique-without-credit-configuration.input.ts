import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutCreditConfigurationInput } from './credit-update-without-credit-configuration.input';
import { CreditCreateWithoutCreditConfigurationInput } from './credit-create-without-credit-configuration.input';

@InputType()
export class CreditUpsertWithWhereUniqueWithoutCreditConfigurationInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutCreditConfigurationInput, {nullable:false})
    update!: CreditUpdateWithoutCreditConfigurationInput;

    @Field(() => CreditCreateWithoutCreditConfigurationInput, {nullable:false})
    create!: CreditCreateWithoutCreditConfigurationInput;
}
