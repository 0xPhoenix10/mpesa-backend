import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutAffiliateInput } from './credit-update-without-affiliate.input';

@InputType()
export class CreditUpdateWithWhereUniqueWithoutAffiliateInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutAffiliateInput, {nullable:false})
    data!: CreditUpdateWithoutAffiliateInput;
}
