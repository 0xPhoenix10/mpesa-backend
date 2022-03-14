import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutDebtorInput } from './credit-create-without-debtor.input';

@InputType()
export class CreditCreateOrConnectWithoutDebtorInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutDebtorInput, {nullable:false})
    create!: CreditCreateWithoutDebtorInput;
}
