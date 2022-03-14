import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutCreditorInput } from './installment-update-without-creditor.input';

@InputType()
export class InstallmentUpdateWithWhereUniqueWithoutCreditorInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutCreditorInput, {nullable:false})
    data!: InstallmentUpdateWithoutCreditorInput;
}
