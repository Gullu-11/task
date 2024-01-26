import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

function App() {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      cardNumber: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Box w="100%" h="100vh">
      <VStack align="center" spacing="20px" mt="30px">
        <FormControl
          w="30%"
          isInvalid={!!errors?.cardNumber}
          mb={errors?.cardNumber ? 0 : 6}
        >
          <FormLabel mb="12px">Add card number:</FormLabel>
          <Controller
            name="cardNumber"
            control={control}
            rules={{
              required: "This field is required",
              validate: (value) => {
                if (value.length !== 16) {
                  return "length must be 16";
                }
                return undefined;
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                variant="filled"
                h="20px"
                placeholder="0000 0000 0000 0000"
                w="98%"
              />
            )}
          />
          <FormErrorMessage color="red">
            {errors?.cardNumber?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          size="md"
          h="30px"
          w="30%"
          border="2px"
          bg="blue"
          color="white"
          fontSize="15px"
          variant="solid"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          ADD
        </Button>
      </VStack>
    </Box>
  );
}

export default App;
