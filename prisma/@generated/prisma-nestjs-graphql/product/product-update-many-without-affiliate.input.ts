import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAffiliateInput } from './product-create-without-affiliate.input';
import { ProductCreateOrConnectWithoutAffiliateInput } from './product-create-or-connect-without-affiliate.input';
import { ProductUpsertWithWhereUniqueWithoutAffiliateInput } from './product-upsert-with-where-unique-without-affiliate.input';
import { ProductCreateManyAffiliateInputEnvelope } from './product-create-many-affiliate-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutAffiliateInput } from './product-update-with-where-unique-without-affiliate.input';
import { ProductUpdateManyWithWhereWithoutAffiliateInput } from './product-update-many-with-where-without-affiliate.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutAffiliateInput {

    @Field(() => [ProductCreateWithoutAffiliateInput], {nullable:true})
    create?: Array<ProductCreateWithoutAffiliateInput>;

    @Field(() => [ProductCreateOrConnectWithoutAffiliateInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAffiliateInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutAffiliateInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutAffiliateInput>;

    @Field(() => ProductCreateManyAffiliateInputEnvelope, {nullable:true})
    createMany?: ProductCreateManyAffiliateInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutAffiliateInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutAffiliateInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutAffiliateInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutAffiliateInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}
