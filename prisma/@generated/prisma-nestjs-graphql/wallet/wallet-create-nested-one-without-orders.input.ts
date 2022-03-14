import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutOrdersInput } from './wallet-create-without-orders.input';
import { WalletCreateOrConnectWithoutOrdersInput } from './wallet-create-or-connect-without-orders.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutOrdersInput {

    @Field(() => WalletCreateWithoutOrdersInput, {nullable:true})
    create?: WalletCreateWithoutOrdersInput;

    @Field(() => WalletCreateOrConnectWithoutOrdersInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutOrdersInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
