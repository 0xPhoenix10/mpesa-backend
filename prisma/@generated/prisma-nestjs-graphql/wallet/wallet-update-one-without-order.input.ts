import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutOrderInput } from './wallet-create-without-order.input';
import { WalletCreateOrConnectWithoutOrderInput } from './wallet-create-or-connect-without-order.input';
import { WalletUpsertWithoutOrderInput } from './wallet-upsert-without-order.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutOrderInput } from './wallet-update-without-order.input';

@InputType()
export class WalletUpdateOneWithoutOrderInput {

    @Field(() => WalletCreateWithoutOrderInput, {nullable:true})
    create?: WalletCreateWithoutOrderInput;

    @Field(() => WalletCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutOrderInput;

    @Field(() => WalletUpsertWithoutOrderInput, {nullable:true})
    upsert?: WalletUpsertWithoutOrderInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutOrderInput, {nullable:true})
    update?: WalletUpdateWithoutOrderInput;
}
