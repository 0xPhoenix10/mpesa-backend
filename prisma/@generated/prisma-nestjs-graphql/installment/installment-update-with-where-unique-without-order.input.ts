import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithoutOrderInput } from './installment-update-without-order.input';

@InputType()
export class InstallmentUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentUpdateWithoutOrderInput, {nullable:false})
    data!: InstallmentUpdateWithoutOrderInput;
}
