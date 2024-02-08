import request, { gql } from "graphql-request"

const URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master"

import toast from 'react-hot-toast';;



export const MakeReservation = async (data: any, user: any) => {
    try {

        const mutationQuery = gql`
            mutation CreatReservation {
            createReservation(
                data: {user: "${user}", note: ${data.note}, numberOfGuests: ${data.numberOfGuests}, phoneNumber: ${data.phoneNumber}, reservationTime: ${data.reservationTime}}
            )
            }

    `;

        const result = await request(URL, mutationQuery);

        toast.promise(
            new Promise<void>((resolve) => setTimeout(() => resolve(), 1000)), // Adjust the timeout value
            {
                loading: 'Sending order...',
                success: 'Order sent successfully!',
                error: 'Failed to send order.',
            }
        );

        return result;
    } catch (error) {
        console.error('Error making order:', error);
        toast.error('Error making order');
        throw error; // Rethrow the error if needed
    }
};



// export const MakeOrder = async (data: any, user: any) => {

//     const newArray = data.map((obj: any) => ({
//         quantity: obj.quantity,
//         item: {
//             connect: {
//                 id: obj.id,
//             },
//         },
//     }));


//     const mutationQuery = gql`
//   mutation CreateAnotherOrder {
//     createOrder(
//       data: {
//         user: "${user.id}"
//         orderitems: {
//           create: ${JSON.stringify(newArray).replace(/"([^"]+)":/g, '$1:')}
//         }
//       }
//     ) {
//       id
//     }
//   }
// `;



//     const result = await request(URL, mutationQuery)
//     toast.success("order sent");
//     return result;
// };

const publishItem = async (itemId: string, user: string) => {
    const mutedQuery = gql`
    mutation MyMutation {
        publishCartitem(where: { id: "${itemId}" }) {
            id
        }
        publishCart(where: { user: "${user}" }) {
            id
        }
    }
    `
    const result = await request(URL, mutedQuery)
    return result
}


export const GetCart = async (user: string) => {
    const mutedQuery = gql`
    query MyQuery {
        cart(where: { user: "${user}" }) {
            id
    cartitems {
                id
      item {
                    name
                    price
                }
                quantity
            }
        }
    }
    `
    const result = await request(URL, mutedQuery)
    return result
}






