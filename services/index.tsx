import request, {gql} from "graphql-request"

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