import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutCreditInput } from './installment-update-without-credit.input';

@InputType()
export class InstallmentUpdateWithWhereUniqueWithoutCreditInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutCreditInput, {nullable:false})
    data!: InstallmentUpdateWithoutCreditInput;
}
