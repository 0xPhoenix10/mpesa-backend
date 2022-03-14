import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MetaDataUpdateWithoutWalletInput } from './meta-data-update-without-wallet.input';
import { MetaDataCreateWithoutWalletInput } from './meta-data-create-without-wallet.input';

@InputType()
export class MetaDataUpsertWithoutWalletInput {

    @Field(() => MetaDataUpdateWithoutWalletInput, {nullable:false})
    update!: MetaDataUpdateWithoutWalletInput;

    @Field(() => MetaDataCreateWithoutWalletInput, {nullable:false})
    create!: MetaDataCreateWithoutWalletInput;
}
