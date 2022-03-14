import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationUpdateWithoutCreditRequestsInput } from './credit-configuration-update-without-credit-requests.input';
import { CreditConfigurationCreateWithoutCreditRequestsInput } from './credit-configuration-create-without-credit-requests.input';

@InputType()
export class CreditConfigurationUpsertWithoutCreditRequestsInput {

    @Field(() => CreditConfigurationUpdateWithoutCreditRequestsInput, {nullable:false})
    update!: CreditConfigurationUpdateWithoutCreditRequestsInput;

    @Field(() => CreditConfigurationCreateWithoutCreditRequestsInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutCreditRequestsInput;
}
