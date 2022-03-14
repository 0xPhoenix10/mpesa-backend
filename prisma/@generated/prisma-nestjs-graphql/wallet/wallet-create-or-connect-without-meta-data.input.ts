import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutMetaDataInput } from './wallet-create-without-meta-data.input';

@InputType()
export class WalletCreateOrConnectWithoutMetaDataInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutMetaDataInput, {nullable:false})
    create!: WalletCreateWithoutMetaDataInput;
}
