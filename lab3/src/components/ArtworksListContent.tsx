import { useEffect, useState } from "react";
import { type ArtworkProps } from "../types/ArtworkProps.ts";
import ArtworkPreview from "./ArtworkPreview";

export default function ArtworksListContent() {
    const[numArtwork, setNumArtworks] = useState(5);
    const [artworks, setArtWorks] = useState<ArtworkProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res=await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtwork}`);
            const jsonRes = await res.json();
            setArtWorks(jsonRes.data);
        }
        fetchData().then(()=>console.log("okay")).catch((e)=>console.log("this =>" +e))
    }, [numArtwork])

    return (
        <>
            <input 
                type={`number`} 
                placeholder={ `Number of artworks`}
                value={numArtwork} 
                onChange={(e) => setNumArtworks(Number(e.target.value))} />                
                <p> numArtworks: {numArtwork} </p>
                <div>
                    {
                        artworks.map((a)=>
                        {
                            return <ArtworkPreview artwork={a}/>
                        })
                    }
                </div>
        </>
    )
}