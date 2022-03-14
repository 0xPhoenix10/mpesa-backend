import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutActivityInput } from './user-create-without-activity.input';
import { UserCreateOrConnectWithoutActivityInput } from './user-create-or-connect-without-activity.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutActivityInput {

    @Field(() => UserCreateWithoutActivityInput, {nullable:true})
    create?: UserCreateWithoutActivityInput;

    @Field(() => UserCreateOrConnectWithoutActivityInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
