// lib/request.js
import { gql } from "@apollo/client";

// Requête pour la page d'accueil (index.js)
export const GET_HOME_PAGE = gql`
  query getaL_Page {
    aL_Page(where: { id: "clhun3pd20002h42gx5vmopde" }) {
      h1
      h1_first
      h1_start
      h1_center
      h1_end
      content {
        document(hydrateRelationships: false)
      }
      id
      meta_desc
      meta_robots
      modifiedAt
      slug
      status
      title
    }
  }
`;

// Requête pour tous les slugs (getStaticPaths)
export const GET_ALL_SLUGS = gql`
  query getAllSlugs {
    aLPages {
      slug
    }
  }
`;

// Requête pour la page [slug].js
export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    aL_Page(where: { slug: $slug }) {
      id
      content {
        document
      }
      breadcrumb
      createdAt
      h1
      h1_center
      h1_end
      h1_first
      h1_start
      meta_desc
      meta_robots
      modifiedAt
      slug
      status
      title
    }
  }
`;



