import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditUpdateManyMutationInput } from './credit-update-many-mutation.input';
import { CreditWhereInput } from './credit-where.input';

@ArgsType()
export class UpdateManyCreditArgs {

    @Field(() => CreditUpdateManyMutationInput, {nullable:false})
    data!: CreditUpdateManyMutationInput;

    @Field(() => CreditWhereInput, {nullable:true})
    where?: CreditWhereInput;
}
