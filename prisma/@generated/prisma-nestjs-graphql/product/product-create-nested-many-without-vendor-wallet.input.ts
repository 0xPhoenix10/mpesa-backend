import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutVendorWalletInput } from './product-create-without-vendor-wallet.input';
import { ProductCreateOrConnectWithoutVendorWalletInput } from './product-create-or-connect-without-vendor-wallet.input';
import { ProductCreateManyVendorWalletInputEnvelope } from './product-create-many-vendor-wallet-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutVendorWalletInput {

    @Field(() => [ProductCreateWithoutVendorWalletInput], {nullable:true})
    create?: Array<ProductCreateWithoutVendorWalletInput>;

    @Field(() => [ProductCreateOrConnectWithoutVendorWalletInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutVendorWalletInput>;

    @Field(() => ProductCreateManyVendorWalletInputEnvelope, {nullable:true})
    createMany?: ProductCreateManyVendorWalletInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}
