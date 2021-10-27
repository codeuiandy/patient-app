import React from 'react'
let baseUrl = window.location.origin;
export default function GetImageUrl({path}) {
    console.log("Image>>>>",path);
    return (
        <img  src={`${baseUrl}/images/${path}`} />
    )
}
