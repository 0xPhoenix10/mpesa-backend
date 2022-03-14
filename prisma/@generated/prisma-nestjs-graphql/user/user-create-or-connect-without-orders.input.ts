import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';

@InputType()
export class UserCreateOrConnectWithoutOrdersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    create!: UserCreateWithoutOrdersInput;
}
