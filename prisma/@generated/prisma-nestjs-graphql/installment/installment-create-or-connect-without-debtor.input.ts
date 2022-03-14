import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateWithoutDebtorInput } from './installment-create-without-debtor.input';

@InputType()
export class InstallmentCreateOrConnectWithoutDebtorInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateWithoutDebtorInput, {nullable:false})
    create!: InstallmentCreateWithoutDebtorInput;
}
