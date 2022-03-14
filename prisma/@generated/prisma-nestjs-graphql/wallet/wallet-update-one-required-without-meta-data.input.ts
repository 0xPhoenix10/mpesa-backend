import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutMetaDataInput } from './wallet-create-without-meta-data.input';
import { WalletCreateOrConnectWithoutMetaDataInput } from './wallet-create-or-connect-without-meta-data.input';
import { WalletUpsertWithoutMetaDataInput } from './wallet-upsert-without-meta-data.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutMetaDataInput } from './wallet-update-without-meta-data.input';

@InputType()
export class WalletUpdateOneRequiredWithoutMetaDataInput {

    @Field(() => WalletCreateWithoutMetaDataInput, {nullable:true})
    create?: WalletCreateWithoutMetaDataInput;

    @Field(() => WalletCreateOrConnectWithoutMetaDataInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutMetaDataInput;

    @Field(() => WalletUpsertWithoutMetaDataInput, {nullable:true})
    upsert?: WalletUpsertWithoutMetaDataInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutMetaDataInput, {nullable:true})
    update?: WalletUpdateWithoutMetaDataInput;
}
