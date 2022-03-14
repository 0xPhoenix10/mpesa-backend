import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateManyUserInput } from './installment-create-many-user.input';

@InputType()
export class InstallmentCreateManyUserInputEnvelope {

    @Field(() => [InstallmentCreateManyUserInput], {nullable:false})
    data!: Array<InstallmentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
