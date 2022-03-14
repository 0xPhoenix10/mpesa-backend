import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataCreateInput } from './meta-data-create.input';

@ArgsType()
export class CreateOneMetaDataArgs {

    @Field(() => MetaDataCreateInput, {nullable:false})
    data!: MetaDataCreateInput;
}
