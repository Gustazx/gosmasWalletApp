import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import Gato from "@src/assets/gato.jpeg";

interface TransactionCardProps {
  name: string;
  amount: string;
  // source: ImageSourcePropType;
  onPress?: () => void;
}

export const TransactionCard = ({
  name,
  amount,
  // source,
  onPress,
}: TransactionCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    setShowDetails(!showDetails);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          // source={source}
          source={Gato}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }}
        />
        <View style={{ flex: 1 }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#ccc",
            }}
          >
            teste
          </Text>
        </View>
        <Text style={{ fontSize: 14 }}>{amount}</Text>
      </View>

      {showDetails && (
        <View
          style={{
            marginTop: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Text>details...</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
