import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutCreditorInput } from './credit-create-without-creditor.input';

@InputType()
export class CreditCreateOrConnectWithoutCreditorInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutCreditorInput, {nullable:false})
    create!: CreditCreateWithoutCreditorInput;
}
