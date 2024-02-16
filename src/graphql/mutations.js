/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourses = /* GraphQL */ `
  mutation CreateCourses(
    $input: CreateCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    createCourses(input: $input, condition: $condition) {
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
export const updateCourses = /* GraphQL */ `
  mutation UpdateCourses(
    $input: UpdateCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    updateCourses(input: $input, condition: $condition) {
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
export const deleteCourses = /* GraphQL */ `
  mutation DeleteCourses(
    $input: DeleteCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    deleteCourses(input: $input, condition: $condition) {
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
