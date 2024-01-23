
import request, { gql } from "graphql-request"
 
const URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master"

export const getCategoryList = async () => {
    const query = gql `
                query CategoryList {
                categories {
                    name
                    slug
                    id
                    image {
                    id
                    url
                    }
                }
                }
    `
  const result = await request(URL, query)
    return result
}




export const getCategoryBySlug = async (slug) => {
    const query = gql `
      query menuList {
        category(where: {slug:"${slug}"}) {
          menuItems {
            name
            isAvailable
            price
             image {
            id
            url
            }
          }
          image {
            id
            url
            }
          name
        }
      }
    `

    const result = await request(URL, query)
    return result
}


export const AddItemToCart = async (data: any) => {
 
  const mutatuionQuery = gql`
    mutation MyMutation {
  createCartitem(
    data: {quantity: 10, item: {connect: {id: "clrgx9hli0icu0cuwl835458j"}}, cart: {connect: {user: "haval"}}}
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
  `

  const result = await request(URL, mutatuionQuery)
  const newitem = result.createCartitem.cart.cartitems.pop()
 
   const isPublished = publishItem(newitem.id, result.createCartitem.cart.user)
    return isPublished
}

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




