// src/graphql/queries/categories.ts

import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
        id
        displayName
        icon
    }
  }
`;