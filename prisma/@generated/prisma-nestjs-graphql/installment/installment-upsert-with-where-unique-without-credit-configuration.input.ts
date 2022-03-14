import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutCreditConfigurationInput } from './installment-update-without-credit-configuration.input';
import { InstallmentCreateWithoutCreditConfigurationInput } from './installment-create-without-credit-configuration.input';

@InputType()
export class InstallmentUpsertWithWhereUniqueWithoutCreditConfigurationInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutCreditConfigurationInput, {nullable:false})
    update!: InstallmentUpdateWithoutCreditConfigurationInput;

    @Field(() => InstallmentCreateWithoutCreditConfigurationInput, {nullable:false})
    create!: InstallmentCreateWithoutCreditConfigurationInput;
}
