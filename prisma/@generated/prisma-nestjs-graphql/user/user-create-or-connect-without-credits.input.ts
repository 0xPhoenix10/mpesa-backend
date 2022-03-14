import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCreditsInput } from './user-create-without-credits.input';

@InputType()
export class UserCreateOrConnectWithoutCreditsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreditsInput, {nullable:false})
    create!: UserCreateWithoutCreditsInput;
}
