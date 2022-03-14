import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrdersAffiliateInput } from './user-create-without-orders-affiliate.input';
import { UserCreateOrConnectWithoutOrdersAffiliateInput } from './user-create-or-connect-without-orders-affiliate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOrdersAffiliateInput {

    @Field(() => UserCreateWithoutOrdersAffiliateInput, {nullable:true})
    create?: UserCreateWithoutOrdersAffiliateInput;

    @Field(() => UserCreateOrConnectWithoutOrdersAffiliateInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAffiliateInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
