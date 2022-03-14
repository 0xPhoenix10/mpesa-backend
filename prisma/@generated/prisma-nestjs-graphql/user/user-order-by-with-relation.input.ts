import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActivityOrderByRelationAggregateInput } from '../activity/activity-order-by-relation-aggregate.input';
import { AnswerOrderByRelationAggregateInput } from '../answer/answer-order-by-relation-aggregate.input';
import { CreditOrderByRelationAggregateInput } from '../credit/credit-order-by-relation-aggregate.input';
import { InstallmentOrderByRelationAggregateInput } from '../installment/installment-order-by-relation-aggregate.input';
import { LoginOrderByRelationAggregateInput } from '../login/login-order-by-relation-aggregate.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';
import { OtherMemberKYCOrderByRelationAggregateInput } from '../other-member-kyc/other-member-kyc-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { SettlementOrderByRelationAggregateInput } from '../settlement/settlement-order-by-relation-aggregate.input';
import { UsersWalletsOrderByRelationAggregateInput } from '../users-wallets/users-wallets-order-by-relation-aggregate.input';
import { VerifyOrderByRelationAggregateInput } from '../verify/verify-order-by-relation-aggregate.input';
import { VisitOrderByRelationAggregateInput } from '../visit/visit-order-by-relation-aggregate.input';
import { WalletOrderByRelationAggregateInput } from '../wallet/wallet-order-by-relation-aggregate.input';
import { CreditRequestOrderByWithRelationInput } from '../credit-request/credit-request-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userPhoto?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expoPushToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inviterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    faceIdImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentCountry?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentData?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentFirstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentLastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentGender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentDateOfBirth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentDateOfIssue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentSerialNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentCreatedAt?: keyof typeof SortOrder;

    @Field(() => ActivityOrderByRelationAggregateInput, {nullable:true})
    activity?: ActivityOrderByRelationAggregateInput;

    @Field(() => AnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: AnswerOrderByRelationAggregateInput;

    @Field(() => CreditOrderByRelationAggregateInput, {nullable:true})
    creditsAffilate?: CreditOrderByRelationAggregateInput;

    @Field(() => CreditOrderByRelationAggregateInput, {nullable:true})
    credits?: CreditOrderByRelationAggregateInput;

    @Field(() => InstallmentOrderByRelationAggregateInput, {nullable:true})
    installment?: InstallmentOrderByRelationAggregateInput;

    @Field(() => LoginOrderByRelationAggregateInput, {nullable:true})
    login?: LoginOrderByRelationAggregateInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    ordersAffiliate?: OrderOrderByRelationAggregateInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    orders?: OrderOrderByRelationAggregateInput;

    @Field(() => OtherMemberKYCOrderByRelationAggregateInput, {nullable:true})
    otherMemberKYC?: OtherMemberKYCOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    product?: ProductOrderByRelationAggregateInput;

    @Field(() => SettlementOrderByRelationAggregateInput, {nullable:true})
    settlement?: SettlementOrderByRelationAggregateInput;

    @Field(() => UsersWalletsOrderByRelationAggregateInput, {nullable:true})
    usersWallets?: UsersWalletsOrderByRelationAggregateInput;

    @Field(() => VerifyOrderByRelationAggregateInput, {nullable:true})
    verify?: VerifyOrderByRelationAggregateInput;

    @Field(() => VisitOrderByRelationAggregateInput, {nullable:true})
    visit?: VisitOrderByRelationAggregateInput;

    @Field(() => WalletOrderByRelationAggregateInput, {nullable:true})
    wallets?: WalletOrderByRelationAggregateInput;

    @Field(() => SettlementOrderByRelationAggregateInput, {nullable:true})
    Settlement?: SettlementOrderByRelationAggregateInput;

    @Field(() => CreditRequestOrderByWithRelationInput, {nullable:true})
    creditRequests?: CreditRequestOrderByWithRelationInput;
}
