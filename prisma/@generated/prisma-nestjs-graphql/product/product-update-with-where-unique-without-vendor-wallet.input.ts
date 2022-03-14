import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutVendorWalletInput } from './product-update-without-vendor-wallet.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutVendorWalletInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutVendorWalletInput, {nullable:false})
    data!: ProductUpdateWithoutVendorWalletInput;
}
