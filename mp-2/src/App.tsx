import styled from "styled-components";
import { useEffect, useState } from "react";
import MTGSets from "./components/MTGSets.tsx";
import type { MTGSet } from "./interfaces/MTGSet.ts";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkslateblue solid;
  background-color: #fbfaf7;
`;

const Header = styled.header`
  padding: 2%;
  border-bottom: 3px solid darkslateblue;
  background-color: #e8e5ff;
  text-align: center;
`;

export default function App() {
  const [data, setData] = useState<MTGSet[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.magicthegathering.io/v1/sets");
      const { sets }: { sets: MTGSet[] } = await rawData.json();
      setData(sets);
    }

    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <Header>
        <h1>MP-2: Magic The Gathering Sets</h1>
        <p>Data Source: magicthegathering.io</p>
      </Header>

      <MTGSets data={data} />
    </ParentDiv>
  );
}
