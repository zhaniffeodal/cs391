import styled from "styled-components";
import { type ArtworkProps } from "../types/ArtworkProps.ts";

const ArtworkPreviewDiv = styled.div`
    margin: 10px;
    padding: 4px;
    width: 400px;
    background-color:lightblue;
`;

export default function ArtworkPreview({ artwork }: {artwork: ArtworkProps}) {
    return (
        <ArtworkPreviewDiv> 
            <h1>{artwork.title}</h1>
            <p>{artwork.place_of_origin}</p>
        </ArtworkPreviewDiv>
    )
}