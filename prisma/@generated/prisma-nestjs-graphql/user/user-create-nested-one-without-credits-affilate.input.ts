import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreditsAffilateInput } from './user-create-without-credits-affilate.input';
import { UserCreateOrConnectWithoutCreditsAffilateInput } from './user-create-or-connect-without-credits-affilate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreditsAffilateInput {

    @Field(() => UserCreateWithoutCreditsAffilateInput, {nullable:true})
    create?: UserCreateWithoutCreditsAffilateInput;

    @Field(() => UserCreateOrConnectWithoutCreditsAffilateInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreditsAffilateInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
