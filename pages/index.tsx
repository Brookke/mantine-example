import { Button, ButtonProps, Group } from "@mantine/core";
import styled from "@emotion/styled";

export default function Page() {
  return (
    <Group>
      <StyledButton2>Hello</StyledButton2>
    </Group>
  );
}

const StyledButton2 = styled(Button)<ButtonProps>({
  backgroundColor: "red",
});
