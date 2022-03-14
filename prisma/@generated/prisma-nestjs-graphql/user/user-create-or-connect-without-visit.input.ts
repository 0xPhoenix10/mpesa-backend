import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutVisitInput } from './user-create-without-visit.input';

@InputType()
export class UserCreateOrConnectWithoutVisitInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutVisitInput, {nullable:false})
    create!: UserCreateWithoutVisitInput;
}
