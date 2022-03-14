import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutVendorInput } from './wallet-create-without-vendor.input';
import { WalletCreateOrConnectWithoutVendorInput } from './wallet-create-or-connect-without-vendor.input';
import { WalletUpsertWithoutVendorInput } from './wallet-upsert-without-vendor.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutVendorInput } from './wallet-update-without-vendor.input';

@InputType()
export class WalletUpdateOneRequiredWithoutVendorInput {

    @Field(() => WalletCreateWithoutVendorInput, {nullable:true})
    create?: WalletCreateWithoutVendorInput;

    @Field(() => WalletCreateOrConnectWithoutVendorInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutVendorInput;

    @Field(() => WalletUpsertWithoutVendorInput, {nullable:true})
    upsert?: WalletUpsertWithoutVendorInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutVendorInput, {nullable:true})
    update?: WalletUpdateWithoutVendorInput;
}
