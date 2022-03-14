import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateWithoutCreditConfigurationInput } from './installment-create-without-credit-configuration.input';

@InputType()
export class InstallmentCreateOrConnectWithoutCreditConfigurationInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateWithoutCreditConfigurationInput, {nullable:false})
    create!: InstallmentCreateWithoutCreditConfigurationInput;
}
