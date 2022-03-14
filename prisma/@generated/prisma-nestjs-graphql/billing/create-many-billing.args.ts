import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingCreateManyInput } from './billing-create-many.input';

@ArgsType()
export class CreateManyBillingArgs {

    @Field(() => [BillingCreateManyInput], {nullable:false})
    data!: Array<BillingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
