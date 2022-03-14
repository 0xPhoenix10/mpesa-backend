import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataUpdateManyMutationInput } from './meta-data-update-many-mutation.input';
import { MetaDataWhereInput } from './meta-data-where.input';

@ArgsType()
export class UpdateManyMetaDataArgs {

    @Field(() => MetaDataUpdateManyMutationInput, {nullable:false})
    data!: MetaDataUpdateManyMutationInput;

    @Field(() => MetaDataWhereInput, {nullable:true})
    where?: MetaDataWhereInput;
}
