import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditCreateManyInput } from './credit-create-many.input';

@ArgsType()
export class CreateManyCreditArgs {

    @Field(() => [CreditCreateManyInput], {nullable:false})
    data!: Array<CreditCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
