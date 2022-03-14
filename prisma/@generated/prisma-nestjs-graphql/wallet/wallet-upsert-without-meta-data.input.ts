import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutMetaDataInput } from './wallet-update-without-meta-data.input';
import { WalletCreateWithoutMetaDataInput } from './wallet-create-without-meta-data.input';

@InputType()
export class WalletUpsertWithoutMetaDataInput {

    @Field(() => WalletUpdateWithoutMetaDataInput, {nullable:false})
    update!: WalletUpdateWithoutMetaDataInput;

    @Field(() => WalletCreateWithoutMetaDataInput, {nullable:false})
    create!: WalletCreateWithoutMetaDataInput;
}
