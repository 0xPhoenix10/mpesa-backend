import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';

@InputType()
export class UserCreateOrConnectWithoutProductInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutProductInput, {nullable:false})
    create!: UserCreateWithoutProductInput;
}
