import { Button, Card, Center, Text } from "@chakra-ui/react";
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
    <Card.Root width="500px" variant="elevated" key="elevated" bg="#1F2127">
      <Card.Body gap="2">
        <Center flexDirection="column">
          <Quote color="#FFD966" />
          <Card.Title mb="4" mt="6" color="#FFFFFF">
            Daily Quote
          </Card.Title>
          <Card.Description>
            <Text
              fontFamily="Georgia, serif"
              fontSize="x-large"
              fontStyle="italic"
              textAlign="center"
              mb={4}
              color="#EDEDED"
            >
              {`"${quoteData?.content}"`}
            </Text>
            <Text
              fontSize="large"
              textAlign="center"
              fontStyle="italic"
              color="#CCCCCC"
              mt={3}
            >
              - {quoteData?.author}
            </Text>
          </Card.Description>
        </Center>
      </Card.Body>
      <Card.Footer justifyContent="center">
        <Button
          variant="solid"
          bg="#2F78CC"
          color="#FFFFFF"
          _hover={{ bg: "#1F5FAF" }}
          onClick={onGenerateNewQuote}
        >
          Next Quote
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default QuoteCard;
