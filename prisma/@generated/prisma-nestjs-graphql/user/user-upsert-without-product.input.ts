import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProductInput } from './user-update-without-product.input';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';

@InputType()
export class UserUpsertWithoutProductInput {

    @Field(() => UserUpdateWithoutProductInput, {nullable:false})
    update!: UserUpdateWithoutProductInput;

    @Field(() => UserCreateWithoutProductInput, {nullable:false})
    create!: UserCreateWithoutProductInput;
}
