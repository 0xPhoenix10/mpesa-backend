import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateWithoutCreditInput } from './installment-create-without-credit.input';

@InputType()
export class InstallmentCreateOrConnectWithoutCreditInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateWithoutCreditInput, {nullable:false})
    create!: InstallmentCreateWithoutCreditInput;
}
