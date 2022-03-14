import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutDebtorInput } from './installment-update-without-debtor.input';

@InputType()
export class InstallmentUpdateWithWhereUniqueWithoutDebtorInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutDebtorInput, {nullable:false})
    data!: InstallmentUpdateWithoutDebtorInput;
}
