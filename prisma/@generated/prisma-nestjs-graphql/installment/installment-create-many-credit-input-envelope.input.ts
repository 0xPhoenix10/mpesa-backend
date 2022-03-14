import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateManyCreditInput } from './installment-create-many-credit.input';

@InputType()
export class InstallmentCreateManyCreditInputEnvelope {

    @Field(() => [InstallmentCreateManyCreditInput], {nullable:false})
    data!: Array<InstallmentCreateManyCreditInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
