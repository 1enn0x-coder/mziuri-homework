import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CardForm({ onAddCard }) {
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={(values, { resetForm }) => {
        onAddCard(values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Add a card</Text>

          <TextInput
            style={styles.input}
            placeholder="Card title"
            value={values.title}
            onChangeText={handleChange("title")}
          />

          <TextInput
            style={styles.input}
            placeholder="Card description"
            value={values.description}
            onChangeText={handleChange("description")}
          />

          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={handleSubmit}
          >
            <Text style={styles.addButtonText}>Add card</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 10,
    marginBottom: 8,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
  addButton: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
