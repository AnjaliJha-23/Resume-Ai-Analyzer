import { ThemeProvider } from "./context/ThemeContext";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}

export default App;