import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutUserInput } from './installment-update-without-user.input';
import { InstallmentCreateWithoutUserInput } from './installment-create-without-user.input';

@InputType()
export class InstallmentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutUserInput, {nullable:false})
    update!: InstallmentUpdateWithoutUserInput;

    @Field(() => InstallmentCreateWithoutUserInput, {nullable:false})
    create!: InstallmentCreateWithoutUserInput;
}
