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



interface CartItem {
    id: string;
    item: {
        id: string;
        name: string;
        price: number;
    };
    quantity: number;
}




interface Cart {
    id: string;
    user: string;
    cartitems: CartItem[];
}

interface MutationResult {
    createCartitem: {
        cart: Cart;
    };
}