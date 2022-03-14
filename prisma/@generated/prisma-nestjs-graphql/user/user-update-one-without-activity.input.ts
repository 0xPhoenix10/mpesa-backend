import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutActivityInput } from './user-create-without-activity.input';
import { UserCreateOrConnectWithoutActivityInput } from './user-create-or-connect-without-activity.input';
import { UserUpsertWithoutActivityInput } from './user-upsert-without-activity.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutActivityInput } from './user-update-without-activity.input';

@InputType()
export class UserUpdateOneWithoutActivityInput {

    @Field(() => UserCreateWithoutActivityInput, {nullable:true})
    create?: UserCreateWithoutActivityInput;

    @Field(() => UserCreateOrConnectWithoutActivityInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput;

    @Field(() => UserUpsertWithoutActivityInput, {nullable:true})
    upsert?: UserUpsertWithoutActivityInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutActivityInput, {nullable:true})
    update?: UserUpdateWithoutActivityInput;
}
