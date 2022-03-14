import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingWhereUniqueInput } from './billing-where-unique.input';

@ArgsType()
export class DeleteOneBillingArgs {

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;
}
