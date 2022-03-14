import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataWhereInput } from './meta-data-where.input';
import { MetaDataOrderByWithRelationInput } from './meta-data-order-by-with-relation.input';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MetaDataScalarFieldEnum } from './meta-data-scalar-field.enum';

@ArgsType()
export class FindFirstMetaDataArgs {

    @Field(() => MetaDataWhereInput, {nullable:true})
    where?: MetaDataWhereInput;

    @Field(() => [MetaDataOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MetaDataOrderByWithRelationInput>;

    @Field(() => MetaDataWhereUniqueInput, {nullable:true})
    cursor?: MetaDataWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MetaDataScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MetaDataScalarFieldEnum>;
}
