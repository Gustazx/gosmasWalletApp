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
import { TransactionCard } from "./components/transactionCard";

const transactions = [
  { id: 1, name: "Netflix", description: "Month subscription", price: "$12" },
  { id: 2, name: "Spotify", description: "Music streaming", price: "$10" },
  { id: 3, name: "Uber", description: "Ride", price: "$15" },
  { id: 4, name: "iFood", description: "Food delivery", price: "$30" },
  {
    id: 5,
    name: "Mercado Livre",
    description: "Online shopping",
    price: "$50",
  },
  { id: 6, name: "Gym membership", description: "Monthly fee", price: "$80" },
  { id: 7, name: "Restaurant", description: "Dinner", price: "$70" },
  { id: 8, name: "Movie tickets", description: "Cinema", price: "$40" },
  { id: 9, name: "Concert tickets", description: "Live music", price: "$120" },
  { id: 10, name: "Travel", description: "Flight", price: "$300" },
  { id: 11, name: "Electricity bill", description: "Utilities", price: "$80" },
  { id: 12, name: "Water bill", description: "Utilities", price: "$40" },
  { id: 13, name: "Phone bill", description: "Utilities", price: "$60" },
  { id: 14, name: "Internet bill", description: "Utilities", price: "$70" },
  { id: 15, name: "Groceries", description: "Supermarket", price: "$100" },
  { id: 16, name: "Coffee shop", description: "Drinks", price: "$5" },
  { id: 17, name: "Haircut", description: "Personal care", price: "$30" },
  { id: 18, name: "Clothing", description: "Shopping", price: "$60" },
  { id: 19, name: "Gift", description: "Present", price: "$20" },
  { id: 20, name: "Taxi", description: "Transportation", price: "$20" },
];

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
        <S.Title>Last Transaction</S.Title>

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
