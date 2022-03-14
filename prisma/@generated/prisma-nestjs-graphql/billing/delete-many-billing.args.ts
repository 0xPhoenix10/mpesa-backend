import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingWhereInput } from './billing-where.input';

@ArgsType()
export class DeleteManyBillingArgs {

    @Field(() => BillingWhereInput, {nullable:true})
    where?: BillingWhereInput;
}
