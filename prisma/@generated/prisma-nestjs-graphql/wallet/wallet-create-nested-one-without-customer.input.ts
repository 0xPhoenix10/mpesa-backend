import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCustomerInput } from './wallet-create-without-customer.input';
import { WalletCreateOrConnectWithoutCustomerInput } from './wallet-create-or-connect-without-customer.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutCustomerInput {

    @Field(() => WalletCreateWithoutCustomerInput, {nullable:true})
    create?: WalletCreateWithoutCustomerInput;

    @Field(() => WalletCreateOrConnectWithoutCustomerInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCustomerInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
