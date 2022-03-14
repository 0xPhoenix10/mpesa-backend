import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateManyDebtorInput } from './installment-create-many-debtor.input';

@InputType()
export class InstallmentCreateManyDebtorInputEnvelope {

    @Field(() => [InstallmentCreateManyDebtorInput], {nullable:false})
    data!: Array<InstallmentCreateManyDebtorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
