import request, { gql } from "graphql-request"
const URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master"

interface QueryResult {
    menuItems: MenuItem[];
}




export const getMenuItemsByCategory = async (slug: string): Promise<MenuItem[]> => {
    const query = gql`
        query getMenuItemsByCategory {
            menuItems(where: {category: {slug: "${slug}"}}) {
                id
                name
                image {
                    url
                }
                price
                isAvailable
            }
        }
    `

    const result: QueryResult = await request(URL, query)
    if (!result) throw new Error("Failed to fetch the menue items data");
    if (!result.menuItems) {
        throw new Error("menu items not found in the result");
    }
    return result.menuItems
}
