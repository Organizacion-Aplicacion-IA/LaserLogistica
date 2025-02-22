import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>
        <Text style={{ color: "red"}}>texto prueba</Text>
        <StatusBar style="light" />
        <Button title="Button" onPress={() => alert("Soy una alerta")}/>
      </View></GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
