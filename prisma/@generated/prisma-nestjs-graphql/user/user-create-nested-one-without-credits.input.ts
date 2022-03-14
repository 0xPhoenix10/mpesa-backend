import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreditsInput } from './user-create-without-credits.input';
import { UserCreateOrConnectWithoutCreditsInput } from './user-create-or-connect-without-credits.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreditsInput {

    @Field(() => UserCreateWithoutCreditsInput, {nullable:true})
    create?: UserCreateWithoutCreditsInput;

    @Field(() => UserCreateOrConnectWithoutCreditsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
