import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutSettlementInput } from './user-create-without-settlement.input';

@InputType()
export class UserCreateOrConnectWithoutSettlementInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSettlementInput, {nullable:false})
    create!: UserCreateWithoutSettlementInput;
}
