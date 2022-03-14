import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutAffiliateInput } from './credit-update-without-affiliate.input';
import { CreditCreateWithoutAffiliateInput } from './credit-create-without-affiliate.input';

@InputType()
export class CreditUpsertWithWhereUniqueWithoutAffiliateInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutAffiliateInput, {nullable:false})
    update!: CreditUpdateWithoutAffiliateInput;

    @Field(() => CreditCreateWithoutAffiliateInput, {nullable:false})
    create!: CreditCreateWithoutAffiliateInput;
}
