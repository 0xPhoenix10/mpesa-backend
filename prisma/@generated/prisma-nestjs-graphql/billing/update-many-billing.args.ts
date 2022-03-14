import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingUpdateManyMutationInput } from './billing-update-many-mutation.input';
import { BillingWhereInput } from './billing-where.input';

@ArgsType()
export class UpdateManyBillingArgs {

    @Field(() => BillingUpdateManyMutationInput, {nullable:false})
    data!: BillingUpdateManyMutationInput;

    @Field(() => BillingWhereInput, {nullable:true})
    where?: BillingWhereInput;
}
