import { NextPage, GetServerSideProps } from 'next';
import { Category, IOrganic } from "../../../../src/interfaces";
import { LayoutAdmin } from '../../../../components/Layout';
import { graphQLClientS } from '../../../../src/graphQLClient';
import { SBS } from '../../../../src/gql/siteQuery';
import Link from 'next/link';
import { FormCategory } from '../../../../components/Layout/admin/FormCategory';
import { useRouter } from 'next/router';
import { LayoutFeaturedListAdmin, LayoutSectionListAdmin, LayoutSiteListAdmin } from '../../../../components/Components';
import { TableFeatured } from '../../../../components/Components/table/TableFeatured';
import { TableSection } from '../../../../components/Components/table/TableSection';
interface Props {
	category: Category;
}
const ProductPage: NextPage<Props> = ({ category }) => {
	const router = useRouter()
	
	return (
		<>
			<LayoutAdmin>
				<div className="my-6 container px-2 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Categorias</h4>
				</div>
				<FormCategory category={category} />
				{
					router.query.category==='new'
					?
						null
					:
					<>
					<div className="my-6 container px-2 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Destacados</h4>
					<Link href={`/admin/sites/${router.query.category}/f/new`}>
						<a className="transition duration-150 ease-in-out hover:bg-lime-500 focus:outline-none border bg-lime-600 rounded text-white px-8 py-2 text-sm">Nuevo Descatado</a>
					</Link>
				</div>
				<TableFeatured featured={category.featured} category={category._id}/>
				<LayoutFeaturedListAdmin data={category.featured} category={category._id}/>

				<div className="my-6 container px-2 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Secciones</h4>
					<Link href={`/admin/sites/${router.query.category}/new`}>
						<a className="transition duration-150 ease-in-out hover:bg-lime-500 focus:outline-none border bg-lime-600 rounded text-white px-8 py-2 text-sm">Nueva Sección</a>
					</Link>
				</div>
				<TableSection sections={category.sections} category={category._id}/>
				<LayoutSectionListAdmin data={category.sections} category={category._id}/>
					</>
				}
				
			</LayoutAdmin>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { category = '' } = query
	let data: Category | null | any
	if (category === 'new') {
		data = {
			name: '',
			href:'',
			description: '',
			imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg',
			imageAlt: ''

		}
	} else {
		const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
		data = site.categories.find((data: { href: string; }) => data.href === `${category}` )
	}
	return {
		props: {
			category: data
		},
	};
}

export default ProductPage;