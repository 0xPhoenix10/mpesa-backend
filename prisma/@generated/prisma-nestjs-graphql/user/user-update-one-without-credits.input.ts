import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreditsInput } from './user-create-without-credits.input';
import { UserCreateOrConnectWithoutCreditsInput } from './user-create-or-connect-without-credits.input';
import { UserUpsertWithoutCreditsInput } from './user-upsert-without-credits.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreditsInput } from './user-update-without-credits.input';

@InputType()
export class UserUpdateOneWithoutCreditsInput {

    @Field(() => UserCreateWithoutCreditsInput, {nullable:true})
    create?: UserCreateWithoutCreditsInput;

    @Field(() => UserCreateOrConnectWithoutCreditsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput;

    @Field(() => UserUpsertWithoutCreditsInput, {nullable:true})
    upsert?: UserUpsertWithoutCreditsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreditsInput, {nullable:true})
    update?: UserUpdateWithoutCreditsInput;
}
