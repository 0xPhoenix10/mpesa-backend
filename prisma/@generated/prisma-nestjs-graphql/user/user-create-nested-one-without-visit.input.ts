import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVisitInput } from './user-create-without-visit.input';
import { UserCreateOrConnectWithoutVisitInput } from './user-create-or-connect-without-visit.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVisitInput {

    @Field(() => UserCreateWithoutVisitInput, {nullable:true})
    create?: UserCreateWithoutVisitInput;

    @Field(() => UserCreateOrConnectWithoutVisitInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutVisitInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
