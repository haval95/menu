import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"



type CartState = {
    items: CartItem[];
    addItem: (item: MenuItem) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
};

export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item) =>
                set((state) => {
                    const existingItemIndex = state.items.findIndex(
                        (cartItem) => cartItem.id === item.id
                    );

                    if (existingItemIndex !== -1) {
                        // If item already exists, increment quantity
                        const updatedItems = [...state.items];
                        updatedItems[existingItemIndex].quantity += 1;

                        return { items: updatedItems };
                    } else {
                        // If item is not in cart, add it with quantity 1
                        return { items: [...state.items, { ...item, quantity: 1 }] };
                    }
                }),
            removeItem: (itemId) =>
                set((state) => {
                    const existingItemIndex = state.items.findIndex(
                        (item) => item.id === itemId
                    );

                    if (existingItemIndex !== -1) {
                        const updatedItems = [...state.items];
                        updatedItems[existingItemIndex].quantity -= 1;

                        // Remove the item if quantity is zero
                        if (updatedItems[existingItemIndex].quantity === 0) {
                            updatedItems.splice(existingItemIndex, 1);
                        }

                        return { items: updatedItems };
                    }

                    return state;
                }),
            clearCart: () => set({ items: [] })
        }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
);