import { Avatar, Button, Card, Center } from "@chakra-ui/react";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { getRandomQuotes } from "../../quotesExplorer.api.ts";

interface QuoteData {
  author: string;
  content: string;
}

const QuoteCard = () => {
  const [quoteData, setQuoteData] = useState<QuoteData>();

  const onGenerateNewQuote = async () => {
    const data = await getRandomQuotes();
    setQuoteData(data);
  };

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      const data = await getRandomQuotes();
      setQuoteData(data);
    };
    fetchRandomQuotes();
  }, []);

  return (
    <Card.Root width="500px" variant="elevated" key="elevated">
      <Card.Body gap="2">
        <Center>
          <Avatar.Root size="lg" shape="rounded">
            <Quote />
          </Avatar.Root>
        </Center>
        <Center>
          <Card.Title mb="2">Daily Quote</Card.Title>
        </Center>
        <Center>
          <Card.Description>
            {quoteData?.content} - {quoteData?.author}
          </Card.Description>
        </Center>
      </Card.Body>
      <Card.Footer justifyContent="center">
        <Button variant="outline" onClick={onGenerateNewQuote}>
          Generate New Quote
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default QuoteCard;
