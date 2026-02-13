import "./App.css";
import MainView from "./main_view/MainView.tsx";
import { Provider } from "@/components/ui/provider";

function App() {
  return (
    <Provider>
      <MainView />
    </Provider>
  );
}

export default App;
