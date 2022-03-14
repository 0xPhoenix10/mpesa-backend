import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateWithoutUserInput } from './installment-create-without-user.input';

@InputType()
export class InstallmentCreateOrConnectWithoutUserInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateWithoutUserInput, {nullable:false})
    create!: InstallmentCreateWithoutUserInput;
}
