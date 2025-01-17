import { StyleSheet, Text, View, StatusBar } from 'react-native';

interface GlobalProps {
  children: React.ReactNode;
}

const Layout = ({ children }: GlobalProps) => {
  return (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" /> 
    {children}
  </View>)
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
