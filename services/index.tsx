
import request, { gql } from "graphql-request"


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
                    menuItems {
                    id
                    name
                    price
                    image {
                        id
                        url
                    }
                    }
                }
                }
    `
  const result = await request("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master", query)
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

    const result = await request("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master", query)
    return result
}

