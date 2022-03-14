import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutCreditConfigurationInput } from './installment-update-without-credit-configuration.input';

@InputType()
export class InstallmentUpdateWithWhereUniqueWithoutCreditConfigurationInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutCreditConfigurationInput, {nullable:false})
    data!: InstallmentUpdateWithoutCreditConfigurationInput;
}
