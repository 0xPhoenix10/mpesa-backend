import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutInstallmentInput } from './user-update-without-installment.input';
import { UserCreateWithoutInstallmentInput } from './user-create-without-installment.input';

@InputType()
export class UserUpsertWithoutInstallmentInput {

    @Field(() => UserUpdateWithoutInstallmentInput, {nullable:false})
    update!: UserUpdateWithoutInstallmentInput;

    @Field(() => UserCreateWithoutInstallmentInput, {nullable:false})
    create!: UserCreateWithoutInstallmentInput;
}
