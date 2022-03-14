import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutAffiliateInput } from './credit-create-without-affiliate.input';
import { CreditCreateOrConnectWithoutAffiliateInput } from './credit-create-or-connect-without-affiliate.input';
import { CreditUpsertWithWhereUniqueWithoutAffiliateInput } from './credit-upsert-with-where-unique-without-affiliate.input';
import { CreditCreateManyAffiliateInputEnvelope } from './credit-create-many-affiliate-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithWhereUniqueWithoutAffiliateInput } from './credit-update-with-where-unique-without-affiliate.input';
import { CreditUpdateManyWithWhereWithoutAffiliateInput } from './credit-update-many-with-where-without-affiliate.input';
import { CreditScalarWhereInput } from './credit-scalar-where.input';

@InputType()
export class CreditUpdateManyWithoutAffiliateInput {

    @Field(() => [CreditCreateWithoutAffiliateInput], {nullable:true})
    create?: Array<CreditCreateWithoutAffiliateInput>;

    @Field(() => [CreditCreateOrConnectWithoutAffiliateInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutAffiliateInput>;

    @Field(() => [CreditUpsertWithWhereUniqueWithoutAffiliateInput], {nullable:true})
    upsert?: Array<CreditUpsertWithWhereUniqueWithoutAffiliateInput>;

    @Field(() => CreditCreateManyAffiliateInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyAffiliateInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    set?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    delete?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditUpdateWithWhereUniqueWithoutAffiliateInput], {nullable:true})
    update?: Array<CreditUpdateWithWhereUniqueWithoutAffiliateInput>;

    @Field(() => [CreditUpdateManyWithWhereWithoutAffiliateInput], {nullable:true})
    updateMany?: Array<CreditUpdateManyWithWhereWithoutAffiliateInput>;

    @Field(() => [CreditScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditScalarWhereInput>;
}
