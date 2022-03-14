import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';
import { MetaDataCreateWithoutWalletInput } from './meta-data-create-without-wallet.input';

@InputType()
export class MetaDataCreateOrConnectWithoutWalletInput {

    @Field(() => MetaDataWhereUniqueInput, {nullable:false})
    where!: MetaDataWhereUniqueInput;

    @Field(() => MetaDataCreateWithoutWalletInput, {nullable:false})
    create!: MetaDataCreateWithoutWalletInput;
}
