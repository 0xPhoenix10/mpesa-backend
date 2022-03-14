import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyVendorWalletInput } from './order-create-many-vendor-wallet.input';

@InputType()
export class OrderCreateManyVendorWalletInputEnvelope {

    @Field(() => [OrderCreateManyVendorWalletInput], {nullable:false})
    data!: Array<OrderCreateManyVendorWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
