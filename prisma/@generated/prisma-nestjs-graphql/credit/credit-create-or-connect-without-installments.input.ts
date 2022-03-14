import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutInstallmentsInput } from './credit-create-without-installments.input';

@InputType()
export class CreditCreateOrConnectWithoutInstallmentsInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutInstallmentsInput, {nullable:false})
    create!: CreditCreateWithoutInstallmentsInput;
}
