import React from "react";
import * as S from "./styles";
import { ScrollView } from "react-native";
import { newNotifications } from "@src/utils/newNotifications";
import { NotificationCard } from "./components/notificationCard";
import { recentNotifications } from "@src/utils/recentNotifications";

export const NotificationScreen = ({}) => {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.NotificationTitle>Notification</S.NotificationTitle>
      </S.ContentHeader>
      <S.ContentBody>
        <S.Title>New</S.Title>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: 220 }}
        >
          {newNotifications.map((newNotification) => {
            return (
              <NotificationCard
                key={newNotification.id}
                date={newNotification.date}
                content={newNotification.content}
                info={newNotification.info}
              />
            );
          })}
        </ScrollView>
        <S.Title>Recent</S.Title>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: 300 }}
        >
          {recentNotifications.map((recentNotification) => {
            return (
              <NotificationCard
                key={recentNotification.id}
                date={recentNotification.date}
                content={recentNotification.content}
                info={recentNotification.info}
              />
            );
          })}
        </ScrollView>
      </S.ContentBody>
    </S.Container>
  );
};
