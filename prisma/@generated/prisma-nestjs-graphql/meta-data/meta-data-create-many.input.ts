import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { phaseEnum } from '../prisma/phase.enum';
import { partnerRoleEnum } from '../prisma/partner-role.enum';
import { legalStatusEnum } from '../prisma/legal-status.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class MetaDataCreateManyInput {

    @Field(() => String, {nullable:false})
    walletAccount!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    CRB?: any;

    @Field(() => String, {nullable:true})
    taxId?: string;

    @Field(() => String, {nullable:true})
    taxName?: string;

    @Field(() => Boolean, {nullable:true})
    seller?: boolean;

    @Field(() => phaseEnum, {nullable:true})
    sellerPhase?: keyof typeof phaseEnum;

    @Field(() => phaseEnum, {nullable:true})
    buyerPhase?: keyof typeof phaseEnum;

    @Field(() => partnerRoleEnum, {nullable:true})
    partnerRole?: keyof typeof partnerRoleEnum;

    @Field(() => String, {nullable:true})
    documentCOI?: string;

    @Field(() => String, {nullable:true})
    documentCR12?: string;

    @Field(() => String, {nullable:true})
    documentSCF?: string;

    @Field(() => String, {nullable:true})
    documentSCA?: string;

    @Field(() => String, {nullable:true})
    documentStore?: string;

    @Field(() => String, {nullable:true})
    documentKRAcert?: string;

    @Field(() => legalStatusEnum, {nullable:true})
    legalStatus?: keyof typeof legalStatusEnum;

    @Field(() => GraphQLJSON, {nullable:true})
    metaBaseURL?: any;

    @Field(() => Boolean, {nullable:true})
    buyer?: boolean;

    @Field(() => Float, {nullable:true})
    maxBuyerOrderAmount?: number;
}
