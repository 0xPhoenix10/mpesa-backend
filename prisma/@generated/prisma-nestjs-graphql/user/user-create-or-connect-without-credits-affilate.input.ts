import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCreditsAffilateInput } from './user-create-without-credits-affilate.input';

@InputType()
export class UserCreateOrConnectWithoutCreditsAffilateInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreditsAffilateInput, {nullable:false})
    create!: UserCreateWithoutCreditsAffilateInput;
}
