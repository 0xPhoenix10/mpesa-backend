import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationCreateInput } from './credit-configuration-create.input';
import { CreditConfigurationUpdateInput } from './credit-configuration-update.input';

@ArgsType()
export class UpsertOneCreditConfigurationArgs {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationCreateInput, {nullable:false})
    create!: CreditConfigurationCreateInput;

    @Field(() => CreditConfigurationUpdateInput, {nullable:false})
    update!: CreditConfigurationUpdateInput;
}
