
import request, { gql } from "graphql-request"
 
const URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master"




export const AddItemToCart = async (data: any) => {
  const mutatuionQuery = gql`
    mutation MyMutation {
      createCartitem(
        data: {
          quantity: 10,
          item: { connect: { id: "clrgx9hli0icu0cuwl835458j" } },
          cart: { connect: { user: "haval" } }
        }
      ) {
        cart {
          id
          user
          cartitems {
            id
            item {
              id
              name
              price
            }
            quantity
          }
        }
      }
    }
  `;

  const result = await request(URL, mutatuionQuery) as MutationResult;
  const newitem = result.createCartitem.cart.cartitems.pop() as CartItem;

  const isPublished = publishItem(newitem.id, result.createCartitem.cart.user);
  return isPublished;
};

const publishItem = async (itemId:string, user:string) => {
  const mutedQuery= gql`
    mutation MyMutation {
  publishCartitem(where: {id:"${itemId}"}) {
    id
  }
  publishCart(where: {user: "${user}"}) {
    id
  }
}
  `
  const result = await request(URL, mutedQuery)
   return result
}


export const GetCart = async (user:string) => {
  const mutedQuery= gql`
    query MyQuery {
  cart(where: {user: "${user}"}) {
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






