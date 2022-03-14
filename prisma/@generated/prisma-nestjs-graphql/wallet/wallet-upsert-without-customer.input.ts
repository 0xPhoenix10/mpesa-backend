import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutCustomerInput } from './wallet-update-without-customer.input';
import { WalletCreateWithoutCustomerInput } from './wallet-create-without-customer.input';

@InputType()
export class WalletUpsertWithoutCustomerInput {

    @Field(() => WalletUpdateWithoutCustomerInput, {nullable:false})
    update!: WalletUpdateWithoutCustomerInput;

    @Field(() => WalletCreateWithoutCustomerInput, {nullable:false})
    create!: WalletCreateWithoutCustomerInput;
}
