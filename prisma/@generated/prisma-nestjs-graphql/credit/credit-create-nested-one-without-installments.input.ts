import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutInstallmentsInput } from './credit-create-without-installments.input';
import { CreditCreateOrConnectWithoutInstallmentsInput } from './credit-create-or-connect-without-installments.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditCreateNestedOneWithoutInstallmentsInput {

    @Field(() => CreditCreateWithoutInstallmentsInput, {nullable:true})
    create?: CreditCreateWithoutInstallmentsInput;

    @Field(() => CreditCreateOrConnectWithoutInstallmentsInput, {nullable:true})
    connectOrCreate?: CreditCreateOrConnectWithoutInstallmentsInput;

    @Field(() => CreditWhereUniqueInput, {nullable:true})
    connect?: CreditWhereUniqueInput;
}
