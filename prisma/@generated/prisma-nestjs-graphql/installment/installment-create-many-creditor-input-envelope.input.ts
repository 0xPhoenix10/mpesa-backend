import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateManyCreditorInput } from './installment-create-many-creditor.input';

@InputType()
export class InstallmentCreateManyCreditorInputEnvelope {

    @Field(() => [InstallmentCreateManyCreditorInput], {nullable:false})
    data!: Array<InstallmentCreateManyCreditorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
