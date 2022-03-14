import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCustomerInput } from './wallet-create-without-customer.input';
import { WalletCreateOrConnectWithoutCustomerInput } from './wallet-create-or-connect-without-customer.input';
import { WalletUpsertWithoutCustomerInput } from './wallet-upsert-without-customer.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutCustomerInput } from './wallet-update-without-customer.input';

@InputType()
export class WalletUpdateOneRequiredWithoutCustomerInput {

    @Field(() => WalletCreateWithoutCustomerInput, {nullable:true})
    create?: WalletCreateWithoutCustomerInput;

    @Field(() => WalletCreateOrConnectWithoutCustomerInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCustomerInput;

    @Field(() => WalletUpsertWithoutCustomerInput, {nullable:true})
    upsert?: WalletUpsertWithoutCustomerInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutCustomerInput, {nullable:true})
    update?: WalletUpdateWithoutCustomerInput;
}
