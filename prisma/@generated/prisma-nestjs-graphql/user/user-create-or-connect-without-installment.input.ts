import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutInstallmentInput } from './user-create-without-installment.input';

@InputType()
export class UserCreateOrConnectWithoutInstallmentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutInstallmentInput, {nullable:false})
    create!: UserCreateWithoutInstallmentInput;
}
