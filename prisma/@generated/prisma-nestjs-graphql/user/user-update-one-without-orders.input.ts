import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';
import { UserCreateOrConnectWithoutOrdersInput } from './user-create-or-connect-without-orders.input';
import { UserUpsertWithoutOrdersInput } from './user-upsert-without-orders.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOrdersInput } from './user-update-without-orders.input';

@InputType()
export class UserUpdateOneWithoutOrdersInput {

    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    create?: UserCreateWithoutOrdersInput;

    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;

    @Field(() => UserUpsertWithoutOrdersInput, {nullable:true})
    upsert?: UserUpsertWithoutOrdersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOrdersInput, {nullable:true})
    update?: UserUpdateWithoutOrdersInput;
}
