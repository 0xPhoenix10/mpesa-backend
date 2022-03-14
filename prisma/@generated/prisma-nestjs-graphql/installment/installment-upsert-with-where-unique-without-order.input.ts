import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutOrderInput } from './installment-update-without-order.input';
import { InstallmentCreateWithoutOrderInput } from './installment-create-without-order.input';

@InputType()
export class InstallmentUpsertWithWhereUniqueWithoutOrderInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutOrderInput, {nullable:false})
    update!: InstallmentUpdateWithoutOrderInput;

    @Field(() => InstallmentCreateWithoutOrderInput, {nullable:false})
    create!: InstallmentCreateWithoutOrderInput;
}
