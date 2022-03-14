import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutVendorInput } from './wallet-create-without-vendor.input';
import { WalletCreateOrConnectWithoutVendorInput } from './wallet-create-or-connect-without-vendor.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutVendorInput {

    @Field(() => WalletCreateWithoutVendorInput, {nullable:true})
    create?: WalletCreateWithoutVendorInput;

    @Field(() => WalletCreateOrConnectWithoutVendorInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutVendorInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
