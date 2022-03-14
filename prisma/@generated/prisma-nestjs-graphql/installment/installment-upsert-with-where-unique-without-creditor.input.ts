import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutCreditorInput } from './installment-update-without-creditor.input';
import { InstallmentCreateWithoutCreditorInput } from './installment-create-without-creditor.input';

@InputType()
export class InstallmentUpsertWithWhereUniqueWithoutCreditorInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutCreditorInput, {nullable:false})
    update!: InstallmentUpdateWithoutCreditorInput;

    @Field(() => InstallmentCreateWithoutCreditorInput, {nullable:false})
    create!: InstallmentCreateWithoutCreditorInput;
}
