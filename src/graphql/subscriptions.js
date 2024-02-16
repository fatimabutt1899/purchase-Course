/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourses = /* GraphQL */ `
  subscription OnCreateCourses(
    $filter: ModelSubscriptionCoursesFilterInput
    $owner: String
  ) {
    onCreateCourses(filter: $filter, owner: $owner) {
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
export const onUpdateCourses = /* GraphQL */ `
  subscription OnUpdateCourses(
    $filter: ModelSubscriptionCoursesFilterInput
    $owner: String
  ) {
    onUpdateCourses(filter: $filter, owner: $owner) {
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
export const onDeleteCourses = /* GraphQL */ `
  subscription OnDeleteCourses(
    $filter: ModelSubscriptionCoursesFilterInput
    $owner: String
  ) {
    onDeleteCourses(filter: $filter, owner: $owner) {
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
