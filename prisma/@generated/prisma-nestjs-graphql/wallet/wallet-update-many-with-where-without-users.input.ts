import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletScalarWhereInput } from './wallet-scalar-where.input';
import { WalletUpdateManyMutationInput } from './wallet-update-many-mutation.input';

@InputType()
export class WalletUpdateManyWithWhereWithoutUsersInput {

    @Field(() => WalletScalarWhereInput, {nullable:false})
    where!: WalletScalarWhereInput;

    @Field(() => WalletUpdateManyMutationInput, {nullable:false})
    data!: WalletUpdateManyMutationInput;
}
