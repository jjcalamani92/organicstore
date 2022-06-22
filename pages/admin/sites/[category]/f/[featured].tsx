import { NextPage, GetServerSideProps } from 'next';
import { Category, Featured, IOrganic, Section } from "../../../../../src/interfaces";
import { LayoutAdmin } from '../../../../../components/Layout';
import { graphQLClientS } from '../../../../../src/graphQLClient';
import { SBS } from '../../../../../src/gql/siteQuery';
import { FormFeatured } from '../../../../../components/Layout/admin/FormFeatured';
interface Props {
	featured: Featured;
	category: string
}
const ProductPage: NextPage<Props> = ({ featured, category }) => {
	return (
		<>
			<LayoutAdmin>
				<div className="my-6 container px-2 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Destacados</h4>
					
				</div>
				<FormFeatured featured={featured} category={category}/>
			</LayoutAdmin>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { featured = '', category='' } = query
	let data: Featured | null | any
	if (featured === 'new') {
		data = {
			name: '',
			href: '',
			description: '',
			imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg',
			imageAlt: ''

		}
	} else {
		const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
		const dat = site.categories.find((data: { href: string; }) => data.href === `${category}`)
		data = dat.featured.find((data: { href: string; }) => data.href === `${featured}`)
	}
	const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
	const res = site.categories.find((data: { href: string; }) => data.href === `${category}`)

	// const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
	// const res = site.categories.find(findCategory)
	// function findCategory(res: Category) {
	// 	return res.href === `${category}`;
	// }
  // const re = res.featured.find(findFeatured)
	// function findFeatured(re:Featured){
	// 	return re.href === `${featured}`;
	// }
	return {
		props: {
			featured: data,
      category: res._id
		},
	};
}

export default ProductPage;