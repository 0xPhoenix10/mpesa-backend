import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsersWalletsWalletIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    walletId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
