import { Button, Card, Center, Text } from "@chakra-ui/react";
import { Quote } from "lucide-react";
import { getRandomQuote } from "../../quotesExplorer.api.ts";
import { useQuery } from "@tanstack/react-query";

const QuoteCard = () => {
  const query = useQuery({ queryKey: ["quote"], queryFn: getRandomQuote });

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
              {query.isLoading ? "Loading..." : `"${query.data?.content}"`}
            </Text>
            <Text
              fontSize="large"
              textAlign="center"
              fontStyle="italic"
              color="#CCCCCC"
              mt={3}
            >
              - {query.data?.author}
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
          onClick={() => query.refetch()}
        >
          Next Quote
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default QuoteCard;
