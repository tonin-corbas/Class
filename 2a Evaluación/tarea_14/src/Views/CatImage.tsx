import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export interface Response {
    id: string;
    url: string;
    width: number;
    height: number;
}

function CatImg({ id, name }: { id: string; name: string }) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${id}`, {
            headers: {
                "x-api-key": "live_ItAjHHjCRJVlDZMEYV3Nt99lI4UEtLhgI1Nfrt09puIKOnBlcM5itU8h7rZg5yrk"
            }
        })
            .then((response) => response.json())
            .then((data: Response[]) => {
                if (data.length > 0) {
                    const image = data[0];
                    setImageUrl(image.url);
                } else if(id == "mala"){
                    setImageUrl("https://cdn2.thecatapi.com/images/Nkg6MZdgL.jpg")
                }
            });
    }, [id]);

    return (
        <>{imageUrl && (
            <Image className="img-fluid"
                src={imageUrl}
                alt={name}
                width={200}
                height={200}
                fluid
            />
        )}</>
    );
}

export default CatImg;
