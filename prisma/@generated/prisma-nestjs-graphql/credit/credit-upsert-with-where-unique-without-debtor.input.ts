import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutDebtorInput } from './credit-update-without-debtor.input';
import { CreditCreateWithoutDebtorInput } from './credit-create-without-debtor.input';

@InputType()
export class CreditUpsertWithWhereUniqueWithoutDebtorInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutDebtorInput, {nullable:false})
    update!: CreditUpdateWithoutDebtorInput;

    @Field(() => CreditCreateWithoutDebtorInput, {nullable:false})
    create!: CreditCreateWithoutDebtorInput;
}
