import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutAffiliateInput } from './credit-create-without-affiliate.input';
import { CreditCreateOrConnectWithoutAffiliateInput } from './credit-create-or-connect-without-affiliate.input';
import { CreditCreateManyAffiliateInputEnvelope } from './credit-create-many-affiliate-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditUncheckedCreateNestedManyWithoutAffiliateInput {

    @Field(() => [CreditCreateWithoutAffiliateInput], {nullable:true})
    create?: Array<CreditCreateWithoutAffiliateInput>;

    @Field(() => [CreditCreateOrConnectWithoutAffiliateInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutAffiliateInput>;

    @Field(() => CreditCreateManyAffiliateInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyAffiliateInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;
}
