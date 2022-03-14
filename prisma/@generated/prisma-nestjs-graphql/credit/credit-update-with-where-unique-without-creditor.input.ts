import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutCreditorInput } from './credit-update-without-creditor.input';

@InputType()
export class CreditUpdateWithWhereUniqueWithoutCreditorInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutCreditorInput, {nullable:false})
    data!: CreditUpdateWithoutCreditorInput;
}
