import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';
import { UserCreateNestedOneWithoutCreditRequestsInput } from '../user/user-create-nested-one-without-credit-requests.input';
import { CreditConfigurationCreateNestedOneWithoutCreditRequestsInput } from '../credit-configuration/credit-configuration-create-nested-one-without-credit-requests.input';

@InputType()
export class CreditRequestCreateWithoutOrderInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CreditRequestStatus, {nullable:true})
    status?: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:false})
    wallet!: string;

    @Field(() => UserCreateNestedOneWithoutCreditRequestsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutCreditRequestsInput;

    @Field(() => CreditConfigurationCreateNestedOneWithoutCreditRequestsInput, {nullable:true})
    creditConfiguration?: CreditConfigurationCreateNestedOneWithoutCreditRequestsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    proceedAt!: Date | string;
}
