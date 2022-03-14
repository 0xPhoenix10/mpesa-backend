import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InstallmentAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    installmentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountWithPenalty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    penalty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliateFees?: keyof typeof SortOrder;
}
