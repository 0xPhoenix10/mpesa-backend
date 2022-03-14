import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOrdersAffiliateInput } from './user-create-without-orders-affiliate.input';

@InputType()
export class UserCreateOrConnectWithoutOrdersAffiliateInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOrdersAffiliateInput, {nullable:false})
    create!: UserCreateWithoutOrdersAffiliateInput;
}
