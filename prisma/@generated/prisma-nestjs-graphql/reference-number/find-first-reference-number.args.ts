import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberWhereInput } from './reference-number-where.input';
import { ReferenceNumberOrderByWithRelationInput } from './reference-number-order-by-with-relation.input';
import { ReferenceNumberWhereUniqueInput } from './reference-number-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReferenceNumberScalarFieldEnum } from './reference-number-scalar-field.enum';

@ArgsType()
export class FindFirstReferenceNumberArgs {

    @Field(() => ReferenceNumberWhereInput, {nullable:true})
    where?: ReferenceNumberWhereInput;

    @Field(() => [ReferenceNumberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReferenceNumberOrderByWithRelationInput>;

    @Field(() => ReferenceNumberWhereUniqueInput, {nullable:true})
    cursor?: ReferenceNumberWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReferenceNumberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReferenceNumberScalarFieldEnum>;
}
