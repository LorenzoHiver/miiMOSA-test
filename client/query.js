import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`query GetAllProjects {
    projects {
      id
      user {
        first_name
        last_name
      }
      title
      collected
      description
      image_url
      status
      target
    }
}`;

export const FIND_ONE_PROJECT = gql`query ($id: String!) {
	project(id: $id) {
    id
    collected
    target
    status
    title
    user {
      first_name
      last_name
    }
    image_url
    description
  }
}`;
