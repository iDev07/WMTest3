import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query News {
      newsAPIConnection {
        edges {
          node {
            created_date
            description_uz
            heading_en
            heading_ru
            heading_uz
            slug
            image_news {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.newsAPIConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails {
      getPostDetail {
        description_uz
        slug
        title_uz
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};
