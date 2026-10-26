import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import Card from "../components/card.jsx";
import CardForm from "../components/cardform.jsx";

export default function HomeScreen() {
  const [cards, setCards] = useState([]);

  function handleAddCard(values) {
    const newCard = {
      id: Date.now().toString(),
      title: values.title,
      description: values.description,
    };

    setCards((currentCards) => [...currentCards, newCard]);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.screenTitle}>Card List</Text>

      <Link href="/todos" asChild>
        <TouchableOpacity style={styles.todosLink} activeOpacity={0.7}>
          <Text style={styles.todosLinkText}>Open todos</Text>
        </TouchableOpacity>
      </Link>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<CardForm onAddCard={handleAddCard} />}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            onPress={() => alert(`You pressed ${item.title}`)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
  },
  todosLink: {
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginHorizontal: 16,
  },
  todosLinkText: {
    color: "#fff",
    fontWeight: "600",
  },
  list: {
    padding: 16,
    gap: 12,
  },
});
