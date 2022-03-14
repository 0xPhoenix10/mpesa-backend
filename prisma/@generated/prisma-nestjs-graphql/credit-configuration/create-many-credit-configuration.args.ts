import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationCreateManyInput } from './credit-configuration-create-many.input';

@ArgsType()
export class CreateManyCreditConfigurationArgs {

    @Field(() => [CreditConfigurationCreateManyInput], {nullable:false})
    data!: Array<CreditConfigurationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
