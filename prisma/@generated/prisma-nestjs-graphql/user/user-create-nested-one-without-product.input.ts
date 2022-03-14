import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';
import { UserCreateOrConnectWithoutProductInput } from './user-create-or-connect-without-product.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProductInput {

    @Field(() => UserCreateWithoutProductInput, {nullable:true})
    create?: UserCreateWithoutProductInput;

    @Field(() => UserCreateOrConnectWithoutProductInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutProductInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
