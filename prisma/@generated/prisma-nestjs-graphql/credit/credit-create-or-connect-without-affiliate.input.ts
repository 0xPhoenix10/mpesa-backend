import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutAffiliateInput } from './credit-create-without-affiliate.input';

@InputType()
export class CreditCreateOrConnectWithoutAffiliateInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutAffiliateInput, {nullable:false})
    create!: CreditCreateWithoutAffiliateInput;
}
