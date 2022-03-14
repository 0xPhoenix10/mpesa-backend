import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateWithoutCreditorInput } from './installment-create-without-creditor.input';

@InputType()
export class InstallmentCreateOrConnectWithoutCreditorInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateWithoutCreditorInput, {nullable:false})
    create!: InstallmentCreateWithoutCreditorInput;
}
