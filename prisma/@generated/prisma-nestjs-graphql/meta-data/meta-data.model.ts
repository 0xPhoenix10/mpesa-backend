import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { phaseEnum } from '../prisma/phase.enum';
import { partnerRoleEnum } from '../prisma/partner-role.enum';
import { legalStatusEnum } from '../prisma/legal-status.enum';
import { Float } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class MetaData {

    @Field(() => ID, {nullable:false})
    walletAccount!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    CRB!: any | null;

    @Field(() => String, {nullable:true})
    taxId!: string | null;

    @Field(() => String, {nullable:true})
    taxName!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    seller!: boolean | null;

    @Field(() => phaseEnum, {nullable:true,defaultValue:'GET_BADGES'})
    sellerPhase!: keyof typeof phaseEnum | null;

    @Field(() => phaseEnum, {nullable:true,defaultValue:'GET_BADGES'})
    buyerPhase!: keyof typeof phaseEnum | null;

    @Field(() => partnerRoleEnum, {nullable:true})
    partnerRole!: keyof typeof partnerRoleEnum | null;

    @Field(() => String, {nullable:true})
    documentCOI!: string | null;

    @Field(() => String, {nullable:true})
    documentCR12!: string | null;

    @Field(() => String, {nullable:true})
    documentSCF!: string | null;

    @Field(() => String, {nullable:true})
    documentSCA!: string | null;

    @Field(() => String, {nullable:true})
    documentStore!: string | null;

    @Field(() => String, {nullable:true})
    documentKRAcert!: string | null;

    @Field(() => legalStatusEnum, {nullable:true})
    legalStatus!: keyof typeof legalStatusEnum | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metaBaseURL!: any | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    buyer!: boolean | null;

    @Field(() => Float, {nullable:true,defaultValue:15000})
    maxBuyerOrderAmount!: number | null;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;
}
