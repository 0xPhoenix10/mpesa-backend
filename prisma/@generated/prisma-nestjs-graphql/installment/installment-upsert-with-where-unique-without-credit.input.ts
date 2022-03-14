import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutCreditInput } from './installment-update-without-credit.input';
import { InstallmentCreateWithoutCreditInput } from './installment-create-without-credit.input';

@InputType()
export class InstallmentUpsertWithWhereUniqueWithoutCreditInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutCreditInput, {nullable:false})
    update!: InstallmentUpdateWithoutCreditInput;

    @Field(() => InstallmentCreateWithoutCreditInput, {nullable:false})
    create!: InstallmentCreateWithoutCreditInput;
}
