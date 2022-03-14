import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutOrderInput } from './wallet-create-without-order.input';
import { WalletCreateOrConnectWithoutOrderInput } from './wallet-create-or-connect-without-order.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutOrderInput {

    @Field(() => WalletCreateWithoutOrderInput, {nullable:true})
    create?: WalletCreateWithoutOrderInput;

    @Field(() => WalletCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutOrderInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
