import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutUserInput } from './installment-update-without-user.input';

@InputType()
export class InstallmentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutUserInput, {nullable:false})
    data!: InstallmentUpdateWithoutUserInput;
}
