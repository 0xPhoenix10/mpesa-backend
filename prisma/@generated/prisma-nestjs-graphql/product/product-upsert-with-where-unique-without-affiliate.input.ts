import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutAffiliateInput } from './product-update-without-affiliate.input';
import { ProductCreateWithoutAffiliateInput } from './product-create-without-affiliate.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutAffiliateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutAffiliateInput, {nullable:false})
    update!: ProductUpdateWithoutAffiliateInput;

    @Field(() => ProductCreateWithoutAffiliateInput, {nullable:false})
    create!: ProductCreateWithoutAffiliateInput;
}
