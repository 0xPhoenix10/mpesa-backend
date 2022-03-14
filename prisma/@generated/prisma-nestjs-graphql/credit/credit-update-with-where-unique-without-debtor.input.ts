import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutDebtorInput } from './credit-update-without-debtor.input';

@InputType()
export class CreditUpdateWithWhereUniqueWithoutDebtorInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutDebtorInput, {nullable:false})
    data!: CreditUpdateWithoutDebtorInput;
}
