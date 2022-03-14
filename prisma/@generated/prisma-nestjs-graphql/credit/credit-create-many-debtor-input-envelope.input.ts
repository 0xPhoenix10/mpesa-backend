import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateManyDebtorInput } from './credit-create-many-debtor.input';

@InputType()
export class CreditCreateManyDebtorInputEnvelope {

    @Field(() => [CreditCreateManyDebtorInput], {nullable:false})
    data!: Array<CreditCreateManyDebtorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
