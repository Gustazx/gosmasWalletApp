import React from "react";
import * as S from "./styles";
import stats from "@src/assets/stats.png";
import { transactions } from "@src/utils/transactions";
import { TransactionCard } from "@src/components/TransactionCard";
import { ScrollView } from "react-native";

export const StatsScreen = ({}) => {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.Title>Income Stats</S.Title>
        <S.StatsImage source={stats} resizeMode="contain">
          <S.AmountValue>$ 2100</S.AmountValue>
        </S.StatsImage>
      </S.ContentHeader>
      <S.ContentBody>
        <S.TotalBalanceTitle>Total Balance</S.TotalBalanceTitle>
        <S.TotalBalance>$ 13.248</S.TotalBalance>
      </S.ContentBody>
      <S.ContentFooter>
        <S.TransactionTitle>Transaction</S.TransactionTitle>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: 220 }}
        >
          {transactions.map((transaction) => (
            <TransactionCard
              // source={{ uri: transaction.imageURI }}
              key={transaction.id}
              name={transaction.name}
              amount={transaction.price}
            />
          ))}
        </ScrollView>
      </S.ContentFooter>
    </S.Container>
  );
};
