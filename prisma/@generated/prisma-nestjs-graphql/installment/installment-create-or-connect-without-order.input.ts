import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateWithoutOrderInput } from './installment-create-without-order.input';

@InputType()
export class InstallmentCreateOrConnectWithoutOrderInput {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateWithoutOrderInput, {nullable:false})
    create!: InstallmentCreateWithoutOrderInput;
}
