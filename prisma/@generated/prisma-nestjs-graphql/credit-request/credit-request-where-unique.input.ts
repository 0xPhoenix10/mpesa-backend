import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestOrderIdUserIdCompoundUniqueInput } from './credit-request-order-id-user-id-compound-unique.input';

@InputType()
export class CreditRequestWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => String, {nullable:true})
    creditConfigurationId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => CreditRequestOrderIdUserIdCompoundUniqueInput, {nullable:true})
    orderId_userId?: CreditRequestOrderIdUserIdCompoundUniqueInput;
}
