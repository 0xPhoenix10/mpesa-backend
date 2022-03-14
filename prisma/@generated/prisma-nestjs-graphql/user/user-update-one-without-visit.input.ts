import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVisitInput } from './user-create-without-visit.input';
import { UserCreateOrConnectWithoutVisitInput } from './user-create-or-connect-without-visit.input';
import { UserUpsertWithoutVisitInput } from './user-upsert-without-visit.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutVisitInput } from './user-update-without-visit.input';

@InputType()
export class UserUpdateOneWithoutVisitInput {

    @Field(() => UserCreateWithoutVisitInput, {nullable:true})
    create?: UserCreateWithoutVisitInput;

    @Field(() => UserCreateOrConnectWithoutVisitInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutVisitInput;

    @Field(() => UserUpsertWithoutVisitInput, {nullable:true})
    upsert?: UserUpsertWithoutVisitInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutVisitInput, {nullable:true})
    update?: UserUpdateWithoutVisitInput;
}
