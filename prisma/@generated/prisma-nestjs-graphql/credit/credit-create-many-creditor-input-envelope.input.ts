import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateManyCreditorInput } from './credit-create-many-creditor.input';

@InputType()
export class CreditCreateManyCreditorInputEnvelope {

    @Field(() => [CreditCreateManyCreditorInput], {nullable:false})
    data!: Array<CreditCreateManyCreditorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
