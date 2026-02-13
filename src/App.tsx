import "./App.css";
import { Provider } from "./components/ui/provider.tsx";
import QuoteCard from "./components/quote_card/QuoteCard.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <QuoteCard />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
