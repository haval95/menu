import request, { gql } from "graphql-request"

const URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master"

import toast from 'react-hot-toast';;



export const MakeReservation = async (data: any, user: any) => {


    const mutationQuery = gql`

mutation CreatReservation {
createReservation(
    data: {user: "${user.id}", note: "${data.note}", numberOfGuests: ${data.numberOfGuests}, phoneNumber: "${data.phoneNumber}", reservationTime: "${data.reservationTime}"}
) {
  id
}
}

    `;



    try {
        const result = await request(URL, mutationQuery);
        toast.success('Reservation enquery sent!');
        return result;
    } catch (error) {
        console.error('Error making reservation:', error);
        toast.error('Error making reservation');
        throw error; // Rethrow the error if needed
    }
};



