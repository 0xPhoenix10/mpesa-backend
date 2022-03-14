import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutCreditorInput } from './credit-update-without-creditor.input';
import { CreditCreateWithoutCreditorInput } from './credit-create-without-creditor.input';

@InputType()
export class CreditUpsertWithWhereUniqueWithoutCreditorInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutCreditorInput, {nullable:false})
    update!: CreditUpdateWithoutCreditorInput;

    @Field(() => CreditCreateWithoutCreditorInput, {nullable:false})
    create!: CreditCreateWithoutCreditorInput;
}
