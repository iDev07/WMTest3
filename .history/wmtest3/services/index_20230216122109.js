import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query News {
      newsConnection {
        edges {
          node {
            created_date
            description_uz
            heading_uz
            id
            image_news {
              url
            }
            slug_news
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.newsConnection.edges.node;
};
