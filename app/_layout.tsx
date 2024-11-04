import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="Home" options={{ title: 'Inicio' }} />
      <Drawer.Screen name="AddTask" options={{ title: 'Agregar Tarea' }} />
      <Drawer.Screen name="TaskDetails" options={{ title: 'Detalles de Tarea' }} />
    </Drawer>
  );  
};

export default DrawerLayout;
