import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationUpdateWithoutInstallmentInput } from './credit-configuration-update-without-installment.input';
import { CreditConfigurationCreateWithoutInstallmentInput } from './credit-configuration-create-without-installment.input';

@InputType()
export class CreditConfigurationUpsertWithoutInstallmentInput {

    @Field(() => CreditConfigurationUpdateWithoutInstallmentInput, {nullable:false})
    update!: CreditConfigurationUpdateWithoutInstallmentInput;

    @Field(() => CreditConfigurationCreateWithoutInstallmentInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutInstallmentInput;
}
