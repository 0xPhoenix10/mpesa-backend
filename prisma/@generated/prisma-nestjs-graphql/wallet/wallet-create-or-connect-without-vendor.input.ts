import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutVendorInput } from './wallet-create-without-vendor.input';

@InputType()
export class WalletCreateOrConnectWithoutVendorInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutVendorInput, {nullable:false})
    create!: WalletCreateWithoutVendorInput;
}
