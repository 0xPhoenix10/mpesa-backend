import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutOrdersInput } from './wallet-create-without-orders.input';
import { WalletCreateOrConnectWithoutOrdersInput } from './wallet-create-or-connect-without-orders.input';
import { WalletUpsertWithoutOrdersInput } from './wallet-upsert-without-orders.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutOrdersInput } from './wallet-update-without-orders.input';

@InputType()
export class WalletUpdateOneWithoutOrdersInput {

    @Field(() => WalletCreateWithoutOrdersInput, {nullable:true})
    create?: WalletCreateWithoutOrdersInput;

    @Field(() => WalletCreateOrConnectWithoutOrdersInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutOrdersInput;

    @Field(() => WalletUpsertWithoutOrdersInput, {nullable:true})
    upsert?: WalletUpsertWithoutOrdersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutOrdersInput, {nullable:true})
    update?: WalletUpdateWithoutOrdersInput;
}
