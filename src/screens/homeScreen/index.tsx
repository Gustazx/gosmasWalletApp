import React from "react";
import * as S from "./styles";
import { Card } from "./components/homeCard";
import Gato from "@src/assets/gato.jpeg";
import Export from "@src/assets/export.png";
import Convert from "@src/assets/convert.png";
import MoneySend from "@src/assets/money-send.png";
import AddCircle from "@src/assets/add-circle.png";

import { ButtonComponent } from "@src/components/ButtonComponent";
import { FlatList, ScrollView, Text } from "react-native";
import { TransactionCard } from "../../components/TransactionCard";

import { transactions } from "@src/utils/transactions";

export const HomeScreen = ({}) => {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.HeaderColumn>
          <S.AppName>Wallet</S.AppName>
          <S.Status>Active</S.Status>
        </S.HeaderColumn>
        <S.Avatar source={Gato} />
      </S.ContentHeader>
      <Card />

      <S.ContentBody>
        <ButtonComponent title="Transfer" icon={Convert} />
        <ButtonComponent title="Payment" icon={Export} />
        <ButtonComponent title="Payout" icon={MoneySend} />
        <ButtonComponent title="Top up" icon={AddCircle} />
      </S.ContentBody>
      <S.ContentFooter>
        <S.TransactionTitle>Last Transaction</S.TransactionTitle>

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
