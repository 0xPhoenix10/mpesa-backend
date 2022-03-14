import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';
import { UserCreateOrConnectWithoutProductInput } from './user-create-or-connect-without-product.input';
import { UserUpsertWithoutProductInput } from './user-upsert-without-product.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProductInput } from './user-update-without-product.input';

@InputType()
export class UserUpdateOneWithoutProductInput {

    @Field(() => UserCreateWithoutProductInput, {nullable:true})
    create?: UserCreateWithoutProductInput;

    @Field(() => UserCreateOrConnectWithoutProductInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutProductInput;

    @Field(() => UserUpsertWithoutProductInput, {nullable:true})
    upsert?: UserUpsertWithoutProductInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProductInput, {nullable:true})
    update?: UserUpdateWithoutProductInput;
}
