import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MetaDataCreateWithoutWalletInput } from './meta-data-create-without-wallet.input';
import { MetaDataCreateOrConnectWithoutWalletInput } from './meta-data-create-or-connect-without-wallet.input';
import { MetaDataUpsertWithoutWalletInput } from './meta-data-upsert-without-wallet.input';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';
import { MetaDataUpdateWithoutWalletInput } from './meta-data-update-without-wallet.input';

@InputType()
export class MetaDataUpdateOneWithoutWalletInput {

    @Field(() => MetaDataCreateWithoutWalletInput, {nullable:true})
    create?: MetaDataCreateWithoutWalletInput;

    @Field(() => MetaDataCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: MetaDataCreateOrConnectWithoutWalletInput;

    @Field(() => MetaDataUpsertWithoutWalletInput, {nullable:true})
    upsert?: MetaDataUpsertWithoutWalletInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MetaDataWhereUniqueInput, {nullable:true})
    connect?: MetaDataWhereUniqueInput;

    @Field(() => MetaDataUpdateWithoutWalletInput, {nullable:true})
    update?: MetaDataUpdateWithoutWalletInput;
}
