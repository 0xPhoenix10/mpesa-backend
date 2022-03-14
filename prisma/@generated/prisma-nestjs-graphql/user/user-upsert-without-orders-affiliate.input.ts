import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOrdersAffiliateInput } from './user-update-without-orders-affiliate.input';
import { UserCreateWithoutOrdersAffiliateInput } from './user-create-without-orders-affiliate.input';

@InputType()
export class UserUpsertWithoutOrdersAffiliateInput {

    @Field(() => UserUpdateWithoutOrdersAffiliateInput, {nullable:false})
    update!: UserUpdateWithoutOrdersAffiliateInput;

    @Field(() => UserCreateWithoutOrdersAffiliateInput, {nullable:false})
    create!: UserCreateWithoutOrdersAffiliateInput;
}
