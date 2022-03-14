import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutVisitInput } from './wallet-create-without-visit.input';

@InputType()
export class WalletCreateOrConnectWithoutVisitInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutVisitInput, {nullable:false})
    create!: WalletCreateWithoutVisitInput;
}
