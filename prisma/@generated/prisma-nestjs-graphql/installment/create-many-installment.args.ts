import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentCreateManyInput } from './installment-create-many.input';

@ArgsType()
export class CreateManyInstallmentArgs {

    @Field(() => [InstallmentCreateManyInput], {nullable:false})
    data!: Array<InstallmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
