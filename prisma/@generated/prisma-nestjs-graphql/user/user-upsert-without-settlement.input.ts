import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSettlementInput } from './user-update-without-settlement.input';
import { UserCreateWithoutSettlementInput } from './user-create-without-settlement.input';

@InputType()
export class UserUpsertWithoutSettlementInput {

    @Field(() => UserUpdateWithoutSettlementInput, {nullable:false})
    update!: UserUpdateWithoutSettlementInput;

    @Field(() => UserCreateWithoutSettlementInput, {nullable:false})
    create!: UserCreateWithoutSettlementInput;
}
