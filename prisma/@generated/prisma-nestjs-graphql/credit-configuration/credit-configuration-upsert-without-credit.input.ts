import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationUpdateWithoutCreditInput } from './credit-configuration-update-without-credit.input';
import { CreditConfigurationCreateWithoutCreditInput } from './credit-configuration-create-without-credit.input';

@InputType()
export class CreditConfigurationUpsertWithoutCreditInput {

    @Field(() => CreditConfigurationUpdateWithoutCreditInput, {nullable:false})
    update!: CreditConfigurationUpdateWithoutCreditInput;

    @Field(() => CreditConfigurationCreateWithoutCreditInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutCreditInput;
}
