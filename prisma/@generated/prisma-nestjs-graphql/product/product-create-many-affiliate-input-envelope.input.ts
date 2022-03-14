import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyAffiliateInput } from './product-create-many-affiliate.input';

@InputType()
export class ProductCreateManyAffiliateInputEnvelope {

    @Field(() => [ProductCreateManyAffiliateInput], {nullable:false})
    data!: Array<ProductCreateManyAffiliateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
