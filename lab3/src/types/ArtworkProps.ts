export type ThumbnailProps={
    lqip:string,
    height:number,
    width:number,
    alt_text:string
};

export type ArtworkProps={
    id:number,
    title:string,
    thumbnail:ThumbnailProps,
    place_of_origin:string,
    medium_display:string,
    is_public_domain:boolean,
    is_on_view:boolean,
    image_id:number;
};