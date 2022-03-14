import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutVendorInput } from './wallet-update-without-vendor.input';
import { WalletCreateWithoutVendorInput } from './wallet-create-without-vendor.input';

@InputType()
export class WalletUpsertWithoutVendorInput {

    @Field(() => WalletUpdateWithoutVendorInput, {nullable:false})
    update!: WalletUpdateWithoutVendorInput;

    @Field(() => WalletCreateWithoutVendorInput, {nullable:false})
    create!: WalletCreateWithoutVendorInput;
}
