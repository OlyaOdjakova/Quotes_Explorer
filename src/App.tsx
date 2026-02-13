import "./App.css";
import { Provider } from "./components/ui/provider.tsx";
import QuoteCard from "./components/quote_card/QuoteCard.tsx";

function App() {
  return (
    <Provider>
      <QuoteCard />
    </Provider>
  );
}

export default App;
