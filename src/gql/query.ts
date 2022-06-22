import { gql } from "@apollo/client";

export const PBS = gql`
	query OrganicAll($site: String!) {
		organicAll(site: $site) {
			slug
		}
	}
`;
export const PRODUCTS = gql`
	query OrganicAll($site: String!) {
		organicAll(site: $site) {
			name
			image
			price
			description
			category
			section
			item
			slug
		}
	}
`;

export const CATEGORY = gql`
	query OrganicAll($site: String!) {
		organicAll(site: $site) {
			category
		}
	}
`;
export const SECTION = gql`
	query OrganicAll($site: String!) {
		organicAll(site: $site) {
			category
			section
		}
	}
`;
export const ITEM = gql`
	query OrganicAll($site: String!) {
		organicAll(site: $site) {
			category
			section
			item
		}
	}
`;


export const PRODUCTS_BY_ITEM = gql`
	query OrganicByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		organicByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;
export const PRODUCTS_BY_SECTION = gql`
	query OrganicByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		organicByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;

export const PRODUCT_BY_SLUG = gql`
	query OrganicBySlug($slug: String!, $site: String!) {
		organicBySlug(slug: $slug, site: $site) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			oldPrice
			tags

			weight
		}
	}
`;


export const PRODUCT_ALL = gql`
	query OrganicsAll($limit: Float!, $offset:Float!, $site: String!) {
		organicsAll(input:  { limit: $limit, offset: $offset}, site:$site ) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			tags
			
			weight
		}

}
`
