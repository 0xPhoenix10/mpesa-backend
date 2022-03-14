import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutVendorWalletInput } from './product-create-without-vendor-wallet.input';
import { ProductCreateOrConnectWithoutVendorWalletInput } from './product-create-or-connect-without-vendor-wallet.input';
import { ProductUpsertWithWhereUniqueWithoutVendorWalletInput } from './product-upsert-with-where-unique-without-vendor-wallet.input';
import { ProductCreateManyVendorWalletInputEnvelope } from './product-create-many-vendor-wallet-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutVendorWalletInput } from './product-update-with-where-unique-without-vendor-wallet.input';
import { ProductUpdateManyWithWhereWithoutVendorWalletInput } from './product-update-many-with-where-without-vendor-wallet.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutVendorWalletInput {

    @Field(() => [ProductCreateWithoutVendorWalletInput], {nullable:true})
    create?: Array<ProductCreateWithoutVendorWalletInput>;

    @Field(() => [ProductCreateOrConnectWithoutVendorWalletInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutVendorWalletInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutVendorWalletInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutVendorWalletInput>;

    @Field(() => ProductCreateManyVendorWalletInputEnvelope, {nullable:true})
    createMany?: ProductCreateManyVendorWalletInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutVendorWalletInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutVendorWalletInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutVendorWalletInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutVendorWalletInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}
