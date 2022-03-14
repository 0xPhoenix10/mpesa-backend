import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutMetaDataInput } from './wallet-create-without-meta-data.input';
import { WalletCreateOrConnectWithoutMetaDataInput } from './wallet-create-or-connect-without-meta-data.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutMetaDataInput {

    @Field(() => WalletCreateWithoutMetaDataInput, {nullable:true})
    create?: WalletCreateWithoutMetaDataInput;

    @Field(() => WalletCreateOrConnectWithoutMetaDataInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutMetaDataInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
