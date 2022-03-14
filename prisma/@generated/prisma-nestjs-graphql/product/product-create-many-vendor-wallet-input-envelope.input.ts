import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyVendorWalletInput } from './product-create-many-vendor-wallet.input';

@InputType()
export class ProductCreateManyVendorWalletInputEnvelope {

    @Field(() => [ProductCreateManyVendorWalletInput], {nullable:false})
    data!: Array<ProductCreateManyVendorWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
