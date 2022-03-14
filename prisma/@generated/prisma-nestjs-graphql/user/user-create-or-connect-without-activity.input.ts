import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutActivityInput } from './user-create-without-activity.input';

@InputType()
export class UserCreateOrConnectWithoutActivityInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutActivityInput, {nullable:false})
    create!: UserCreateWithoutActivityInput;
}
