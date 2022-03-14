import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutVisitInput } from './wallet-create-without-visit.input';
import { WalletCreateOrConnectWithoutVisitInput } from './wallet-create-or-connect-without-visit.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutVisitInput {

    @Field(() => WalletCreateWithoutVisitInput, {nullable:true})
    create?: WalletCreateWithoutVisitInput;

    @Field(() => WalletCreateOrConnectWithoutVisitInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutVisitInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
