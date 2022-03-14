import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyUpdateInput } from './verify-update.input';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';

@ArgsType()
export class UpdateOneVerifyArgs {

    @Field(() => VerifyUpdateInput, {nullable:false})
    data!: VerifyUpdateInput;

    @Field(() => VerifyWhereUniqueInput, {nullable:false})
    where!: VerifyWhereUniqueInput;
}
