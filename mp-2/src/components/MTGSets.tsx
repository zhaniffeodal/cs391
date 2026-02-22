import styled from "styled-components";
import { useMemo, useState } from "react";
import type { MTGSet } from "../interfaces/MTGSet";

const Wrapper = styled.div`
  padding: 2%;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  padding: 1% 0 2% 0;
`;

const SearchInput = styled.input`
  width: min(650px, 95%);
  padding: 10px 12px;
  border: 2px solid darkslateblue;
  border-radius: 10px;
  font-size: calc(8px + 0.6vw);
  outline: none;
`;

const AllSetsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 14px;
`;

const SingleSetDiv = styled.div<{ isCore: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: min(340px, 95%);
  padding: 14px;
  margin: 6px;

  background-color: ${(props) => (props.isCore ? "#fff1cc" : "#e9f3ff")};
  border: 3px ${(props) => (props.isCore ? "darkgoldenrod" : "darkslateblue")} solid;
  border-radius: 14px;

  color: #1b1b1b;
  font: italic small-caps bold calc(7px + 0.7vw) Papyrus, fantasy;
  text-align: center;
`;

const Tag = styled.p`
  margin-top: 8px;
  font-size: calc(6px + 0.6vw);
`;

export default function MTGSets(props: { data: MTGSet[] }) {
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return props.data;

    return props.data.filter((s: MTGSet) => {
      const name = (s.name ?? "").toLowerCase();
      const code = (s.code ?? "").toLowerCase();
      const type = (s.type ?? "").toLowerCase();
      return name.includes(q) || code.includes(q) || type.includes(q);
    });
  }, [props.data, query]);

  return (
    <Wrapper>
      <Controls>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by set name, code, or type..."
        />
      </Controls>

      <AllSetsDiv>
        {filtered.map((set: MTGSet) => {
          const isCore = (set.type ?? "").toLowerCase().includes("core");

          return (
            <SingleSetDiv key={set.code} isCore={isCore}>
              <h1>{set.name}</h1>
              <Tag>
                <strong>Code:</strong> {set.code}
              </Tag>
              <Tag>
                <strong>Type:</strong> {set.type ?? "Unknown"}
              </Tag>
              <Tag>
                <strong>Release:</strong> {set.releaseDate ?? "N/A"}
              </Tag>
              <Tag>
                <strong>Block:</strong> {set.block ?? "No block"}
              </Tag>
            </SingleSetDiv>
          );
        })}
      </AllSetsDiv>
    </Wrapper>
  );
}
