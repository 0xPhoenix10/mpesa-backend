import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutAffiliateInput } from './product-create-without-affiliate.input';

@InputType()
export class ProductCreateOrConnectWithoutAffiliateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutAffiliateInput, {nullable:false})
    create!: ProductCreateWithoutAffiliateInput;
}
