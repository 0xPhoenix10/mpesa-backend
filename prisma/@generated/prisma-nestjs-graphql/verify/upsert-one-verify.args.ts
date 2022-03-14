import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { VerifyCreateInput } from './verify-create.input';
import { VerifyUpdateInput } from './verify-update.input';

@ArgsType()
export class UpsertOneVerifyArgs {

    @Field(() => VerifyWhereUniqueInput, {nullable:false})
    where!: VerifyWhereUniqueInput;

    @Field(() => VerifyCreateInput, {nullable:false})
    create!: VerifyCreateInput;

    @Field(() => VerifyUpdateInput, {nullable:false})
    update!: VerifyUpdateInput;
}
