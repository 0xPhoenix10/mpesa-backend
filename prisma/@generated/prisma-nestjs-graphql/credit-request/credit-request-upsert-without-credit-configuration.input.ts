import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestUpdateWithoutCreditConfigurationInput } from './credit-request-update-without-credit-configuration.input';
import { CreditRequestCreateWithoutCreditConfigurationInput } from './credit-request-create-without-credit-configuration.input';

@InputType()
export class CreditRequestUpsertWithoutCreditConfigurationInput {

    @Field(() => CreditRequestUpdateWithoutCreditConfigurationInput, {nullable:false})
    update!: CreditRequestUpdateWithoutCreditConfigurationInput;

    @Field(() => CreditRequestCreateWithoutCreditConfigurationInput, {nullable:false})
    create!: CreditRequestCreateWithoutCreditConfigurationInput;
}
