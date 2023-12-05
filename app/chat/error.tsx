'use client';
 
import { Box, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <Box display='flex' height='100vh' flexDir='column' alignItems='center' justifyContent='center'>
      <h2 className="text-center">Something went wrong...</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}