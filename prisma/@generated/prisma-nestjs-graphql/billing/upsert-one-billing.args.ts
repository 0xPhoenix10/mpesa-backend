import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingCreateInput } from './billing-create.input';
import { BillingUpdateInput } from './billing-update.input';

@ArgsType()
export class UpsertOneBillingArgs {

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;

    @Field(() => BillingCreateInput, {nullable:false})
    create!: BillingCreateInput;

    @Field(() => BillingUpdateInput, {nullable:false})
    update!: BillingUpdateInput;
}
