/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourses = /* GraphQL */ `
  query GetCourses($id: ID!) {
    getCourses(id: $id) {
      id
      title
      price
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
