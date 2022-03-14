import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOrdersInput } from './user-update-without-orders.input';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';

@InputType()
export class UserUpsertWithoutOrdersInput {

    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    update!: UserUpdateWithoutOrdersInput;

    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    create!: UserCreateWithoutOrdersInput;
}
