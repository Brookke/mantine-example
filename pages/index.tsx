import { Table } from "@mantine/core";
import styled from "@emotion/styled";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export default function IndexPage() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          {/**
           * Align right Doesn't work as it gets overriden by the default styles in the Table component
           */}
          <StyledTh align="right">Element position</StyledTh>
          <StyledTh>Element name</StyledTh>
          <StyledTh>Symbol</StyledTh>
          <StyledTh>Atomic mass</StyledTh>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

const StyledTh = styled.th<{ align?: "left" | "right" }>({}, (props) => ({
  textAlign: props.align,
}));
