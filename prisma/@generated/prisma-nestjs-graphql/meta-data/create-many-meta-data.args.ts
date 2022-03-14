import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataCreateManyInput } from './meta-data-create-many.input';

@ArgsType()
export class CreateManyMetaDataArgs {

    @Field(() => [MetaDataCreateManyInput], {nullable:false})
    data!: Array<MetaDataCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
