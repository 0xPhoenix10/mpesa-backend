import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestCreateManyInput } from './credit-request-create-many.input';

@ArgsType()
export class CreateManyCreditRequestArgs {

    @Field(() => [CreditRequestCreateManyInput], {nullable:false})
    data!: Array<CreditRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
