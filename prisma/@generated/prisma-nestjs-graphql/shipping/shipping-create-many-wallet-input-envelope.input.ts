import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateManyWalletInput } from './shipping-create-many-wallet.input';

@InputType()
export class ShippingCreateManyWalletInputEnvelope {

    @Field(() => [ShippingCreateManyWalletInput], {nullable:false})
    data!: Array<ShippingCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
