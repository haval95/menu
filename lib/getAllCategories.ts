import request, { gql } from "graphql-request"
const URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrgwgsky000008l3fy3l0n0d/master"

interface QueryResult {
  categories: Category[];
}

const getAllCategories = async (): Promise<Category[]> => {
  const query = gql`
           query getCategories {
                categories {
                    name
                    slug
                    id
                    image {
                      url
                    }
                  }
              }
    `
  const result: QueryResult = await request(URL, query, {
    headers: {
      'cache-control': 'max-age=600',
    },
  });
  if (!result) throw new Error("Failed to fetch the categories data");
  if (!result.categories) {
    throw new Error("Categories not found in the result");
  }

  return result.categories;
};


export default getAllCategories


