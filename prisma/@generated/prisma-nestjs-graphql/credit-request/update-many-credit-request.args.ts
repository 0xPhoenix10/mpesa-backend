import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestUpdateManyMutationInput } from './credit-request-update-many-mutation.input';
import { CreditRequestWhereInput } from './credit-request-where.input';

@ArgsType()
export class UpdateManyCreditRequestArgs {

    @Field(() => CreditRequestUpdateManyMutationInput, {nullable:false})
    data!: CreditRequestUpdateManyMutationInput;

    @Field(() => CreditRequestWhereInput, {nullable:true})
    where?: CreditRequestWhereInput;
}
