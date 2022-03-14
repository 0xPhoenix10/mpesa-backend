import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutDebtorInput } from './installment-update-without-debtor.input';
import { InstallmentCreateWithoutDebtorInput } from './installment-create-without-debtor.input';

@InputType()
export class InstallmentUpsertWithWhereUniqueWithoutDebtorInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutDebtorInput, {nullable:false})
    update!: InstallmentUpdateWithoutDebtorInput;

    @Field(() => InstallmentCreateWithoutDebtorInput, {nullable:false})
    create!: InstallmentCreateWithoutDebtorInput;
}
