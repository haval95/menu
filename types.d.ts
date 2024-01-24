type Category = {
    "name": string,
    "slug": string,
    "id": string,
    "image": {
        "url": string
    }
}

type MenuItem = {
    "id": string,
    "name": string,
    "image": {
        "url": string,
        "fileName": string
    },
    "price": number,
    "isAvailable": boolean
}


