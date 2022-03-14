import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreditsAffilateInput } from './user-create-without-credits-affilate.input';
import { UserCreateOrConnectWithoutCreditsAffilateInput } from './user-create-or-connect-without-credits-affilate.input';
import { UserUpsertWithoutCreditsAffilateInput } from './user-upsert-without-credits-affilate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreditsAffilateInput } from './user-update-without-credits-affilate.input';

@InputType()
export class UserUpdateOneWithoutCreditsAffilateInput {

    @Field(() => UserCreateWithoutCreditsAffilateInput, {nullable:true})
    create?: UserCreateWithoutCreditsAffilateInput;

    @Field(() => UserCreateOrConnectWithoutCreditsAffilateInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreditsAffilateInput;

    @Field(() => UserUpsertWithoutCreditsAffilateInput, {nullable:true})
    upsert?: UserUpsertWithoutCreditsAffilateInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreditsAffilateInput, {nullable:true})
    update?: UserUpdateWithoutCreditsAffilateInput;
}
