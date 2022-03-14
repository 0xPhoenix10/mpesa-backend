import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutVendorWalletInput } from './product-create-without-vendor-wallet.input';

@InputType()
export class ProductCreateOrConnectWithoutVendorWalletInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutVendorWalletInput, {nullable:false})
    create!: ProductCreateWithoutVendorWalletInput;
}
