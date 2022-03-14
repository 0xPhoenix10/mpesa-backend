import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';
import { Activity } from '../activity/activity.model';
import { Answer } from '../answer/answer.model';
import { Credit } from '../credit/credit.model';
import { Installment } from '../installment/installment.model';
import { Login } from '../login/login.model';
import { Order } from '../order/order.model';
import { OtherMemberKYC } from '../other-member-kyc/other-member-kyc.model';
import { Product } from '../product/product.model';
import { Settlement } from '../settlement/settlement.model';
import { UsersWallets } from '../users-wallets/users-wallets.model';
import { Verify } from '../verify/verify.model';
import { Visit } from '../visit/visit.model';
import { Wallet } from '../wallet/wallet.model';
import { CreditRequest } from '../credit-request/credit-request.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    userPhoto!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => CountryCode, {nullable:true})
    countryCode!: keyof typeof CountryCode | null;

    @Field(() => String, {nullable:true})
    documentId!: string | null;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    pin!: string | null;

    @Field(() => String, {nullable:true})
    deviceToken!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    verified!: boolean;

    @Field(() => String, {nullable:true})
    expoPushToken!: string | null;

    @Field(() => String, {nullable:true})
    inviterId!: string | null;

    @Field(() => String, {nullable:true})
    faceIdImage!: string | null;

    @Field(() => CountryCode, {nullable:true})
    documentCountry!: keyof typeof CountryCode | null;

    @Field(() => GraphQLJSON, {nullable:true})
    documentData!: any | null;

    @Field(() => String, {nullable:true})
    documentFirstName!: string | null;

    @Field(() => String, {nullable:true})
    documentLastName!: string | null;

    @Field(() => String, {nullable:true})
    documentImage!: string | null;

    @Field(() => GenderEnum, {nullable:true})
    documentGender!: keyof typeof GenderEnum | null;

    @Field(() => Date, {nullable:true})
    documentDateOfBirth!: Date | null;

    @Field(() => Date, {nullable:true})
    documentDateOfIssue!: Date | null;

    @Field(() => String, {nullable:true})
    documentSerialNumber!: string | null;

    @Field(() => Date, {nullable:true})
    documentCreatedAt!: Date | null;

    @Field(() => [Activity], {nullable:true})
    activity?: Array<Activity>;

    @Field(() => [Answer], {nullable:true})
    answers?: Array<Answer>;

    @Field(() => [Credit], {nullable:true})
    creditsAffilate?: Array<Credit>;

    @Field(() => [Credit], {nullable:true})
    credits?: Array<Credit>;

    @Field(() => [Installment], {nullable:true})
    installment?: Array<Installment>;

    @Field(() => [Login], {nullable:true})
    login?: Array<Login>;

    @Field(() => [Order], {nullable:true})
    ordersAffiliate?: Array<Order>;

    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;

    @Field(() => [OtherMemberKYC], {nullable:true})
    otherMemberKYC?: Array<OtherMemberKYC>;

    @Field(() => [Product], {nullable:true})
    product?: Array<Product>;

    @Field(() => [Settlement], {nullable:true})
    settlement?: Array<Settlement>;

    @Field(() => [UsersWallets], {nullable:true})
    usersWallets?: Array<UsersWallets>;

    @Field(() => [Verify], {nullable:true})
    verify?: Array<Verify>;

    @Field(() => [Visit], {nullable:true})
    visit?: Array<Visit>;

    @Field(() => [Wallet], {nullable:true})
    wallets?: Array<Wallet>;

    @Field(() => [Settlement], {nullable:true})
    Settlement?: Array<Settlement>;

    @Field(() => CreditRequest, {nullable:true})
    creditRequests?: CreditRequest | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
