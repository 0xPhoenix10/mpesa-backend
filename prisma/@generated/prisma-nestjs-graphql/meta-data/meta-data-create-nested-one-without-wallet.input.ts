import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MetaDataCreateWithoutWalletInput } from './meta-data-create-without-wallet.input';
import { MetaDataCreateOrConnectWithoutWalletInput } from './meta-data-create-or-connect-without-wallet.input';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';

@InputType()
export class MetaDataCreateNestedOneWithoutWalletInput {

    @Field(() => MetaDataCreateWithoutWalletInput, {nullable:true})
    create?: MetaDataCreateWithoutWalletInput;

    @Field(() => MetaDataCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: MetaDataCreateOrConnectWithoutWalletInput;

    @Field(() => MetaDataWhereUniqueInput, {nullable:true})
    connect?: MetaDataWhereUniqueInput;
}
