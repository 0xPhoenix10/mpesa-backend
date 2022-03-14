import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';
import { UserCreateOrConnectWithoutOrdersInput } from './user-create-or-connect-without-orders.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOrdersInput {

    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    create?: UserCreateWithoutOrdersInput;

    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
