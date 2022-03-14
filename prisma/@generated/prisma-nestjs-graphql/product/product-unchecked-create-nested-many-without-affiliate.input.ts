import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAffiliateInput } from './product-create-without-affiliate.input';
import { ProductCreateOrConnectWithoutAffiliateInput } from './product-create-or-connect-without-affiliate.input';
import { ProductCreateManyAffiliateInputEnvelope } from './product-create-many-affiliate-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutAffiliateInput {

    @Field(() => [ProductCreateWithoutAffiliateInput], {nullable:true})
    create?: Array<ProductCreateWithoutAffiliateInput>;

    @Field(() => [ProductCreateOrConnectWithoutAffiliateInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAffiliateInput>;

    @Field(() => ProductCreateManyAffiliateInputEnvelope, {nullable:true})
    createMany?: ProductCreateManyAffiliateInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}
