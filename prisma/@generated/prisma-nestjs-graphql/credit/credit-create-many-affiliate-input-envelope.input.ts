import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateManyAffiliateInput } from './credit-create-many-affiliate.input';

@InputType()
export class CreditCreateManyAffiliateInputEnvelope {

    @Field(() => [CreditCreateManyAffiliateInput], {nullable:false})
    data!: Array<CreditCreateManyAffiliateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
