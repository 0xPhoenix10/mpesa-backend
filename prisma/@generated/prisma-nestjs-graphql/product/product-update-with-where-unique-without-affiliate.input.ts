import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutAffiliateInput } from './product-update-without-affiliate.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutAffiliateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutAffiliateInput, {nullable:false})
    data!: ProductUpdateWithoutAffiliateInput;
}
