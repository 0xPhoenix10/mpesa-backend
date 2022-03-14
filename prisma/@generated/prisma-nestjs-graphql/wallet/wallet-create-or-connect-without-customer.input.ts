import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutCustomerInput } from './wallet-create-without-customer.input';

@InputType()
export class WalletCreateOrConnectWithoutCustomerInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutCustomerInput, {nullable:false})
    create!: WalletCreateWithoutCustomerInput;
}
