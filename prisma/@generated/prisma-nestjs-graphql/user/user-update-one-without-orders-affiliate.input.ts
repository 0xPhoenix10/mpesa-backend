import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrdersAffiliateInput } from './user-create-without-orders-affiliate.input';
import { UserCreateOrConnectWithoutOrdersAffiliateInput } from './user-create-or-connect-without-orders-affiliate.input';
import { UserUpsertWithoutOrdersAffiliateInput } from './user-upsert-without-orders-affiliate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOrdersAffiliateInput } from './user-update-without-orders-affiliate.input';

@InputType()
export class UserUpdateOneWithoutOrdersAffiliateInput {

    @Field(() => UserCreateWithoutOrdersAffiliateInput, {nullable:true})
    create?: UserCreateWithoutOrdersAffiliateInput;

    @Field(() => UserCreateOrConnectWithoutOrdersAffiliateInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAffiliateInput;

    @Field(() => UserUpsertWithoutOrdersAffiliateInput, {nullable:true})
    upsert?: UserUpsertWithoutOrdersAffiliateInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOrdersAffiliateInput, {nullable:true})
    update?: UserUpdateWithoutOrdersAffiliateInput;
}
