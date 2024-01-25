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
    },
    "price": number,
    "isAvailable": boolean
}



type CartItem = {
    id: string;
    image: { url: string };
    isAvailable: boolean;
    name: string;
    price: number;
    quantity: number;
}