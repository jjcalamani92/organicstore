import { FC } from "react";
import { Category, Featured, IOrganic, Item, Section } from "../../src/interfaces";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useRouter } from "next/router";

interface Props {
	products: IOrganic[];
}
interface LayoutSiteListAdmin {
	data: Category[] | Section[] | Featured[] | Item[];
}
interface LayoutFeaturedListAdmin {
	data: Featured[];
	category: string;
}
interface LayoutSectionListAdmin {
	data: Section[];
	category: string;
}
interface LayoutItemsListAdmin {
	data: Item[];
	category: string;
	section: string;
}

export const LayoutProductlist01: FC<Props> = ({ products }) => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
						{products.map((product, i) => (
							<div key={i} className="group relative">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
									<img
										src={product.image[0]}
										alt={product.name}
										className="w-full h-full object-contain"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<Link
												href={`/detalles/${product.slug}`}
												// href={`/detail/${product.slug}`}

												passHref
												prefetch={false}
											>
												<a href="#">
													<span aria-hidden="true" className="absolute inset-0" />
													{product.name}
												</a>
											</Link>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									<p className="text-sm font-medium text-gray-900">
										{product.price}.00 Bs
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutItemListAdmin: FC<Props> = ({ products }) => {
	const router = useRouter()

	const onDeleteData = async (id: string) => {
		await axios.delete(`${process.env.APIP_URL}/api/organic/${id}`)
		router.reload()
	}
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{products.map((product, i) => (
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
									<img
										src={product.image[0]}
										alt={product.name}
										className="w-full h-full object-contain"
									/>
									<div className="flex justify-end absolute right-1 bottom-1 bg-white rounded pt-1">
										<Link href={`/admin/products/${product.slug}`} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5 "
													icon={faPenToSquare}
												/>
											</a>
										</Link>
										<div onClick={() => onDeleteData(product._id)} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
													icon={faCircleMinus}
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{product.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};


export const LayoutSiteListAdmin: FC<LayoutSiteListAdmin> = ({ data }) => {
	const router = useRouter()
	// console.log(data)
	const onDeleteData = async (id: string) => {
    await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
    router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
									<img
										src={d.imageSrc}
										alt={d.name}
										className="w-full h-full object-contain"
									/>
									<div className="flex justify-end absolute right-1 bottom-1 bg-white rounded pt-1">
										<Link href={`/admin/sites/${d.href}`} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5 "
													icon={faPenToSquare}
												/>
											</a>
										</Link>
										<div onClick={() => onDeleteData(d._id)} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
													icon={faCircleMinus}
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{d.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutSectionListAdmin: FC<LayoutSectionListAdmin> = ({ data, category }) => {
	const router = useRouter()
  const onDeleteData = async (id: string) => {
    const data = {section: id, category: category }
    await axios.put(`${process.env.APIS_URL}/api/site/removesection/${process.env.API_SITE}`, data)
    router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
									<img
										src={d.imageSrc}
										alt={d.name}
										className="w-full h-full object-contain"
									/>
									<div className="flex justify-end absolute right-1 bottom-1 bg-white rounded pt-1">
									<Link href={`/admin/sites/${router.query.category}/${d.href}`} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5 "
													icon={faPenToSquare}
												/>
											</a>
										</Link>
										<div onClick={() => onDeleteData(d._id)} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
													icon={faCircleMinus}
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{d.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutFeaturedListAdmin: FC<LayoutFeaturedListAdmin> = ({ data, category }) => {
	const router = useRouter()
  const onDeleteData = async (id: string) => {
    const data = {featured: id, category: category }
    await axios.put(`${process.env.APIS_URL}/api/site/removefeatured/${process.env.API_SITE}`, data)
    router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
									<img
										src={d.imageSrc}
										alt={d.name}
										className="w-full h-full object-contain"
									/>
									<div className="flex justify-end absolute right-1 bottom-1 bg-white rounded pt-1">
									<Link href={`/admin/sites/${router.query.category}/f/${d.href}`} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5 "
													icon={faPenToSquare}
												/>
											</a>
										</Link>
										<div onClick={() => onDeleteData(d._id)} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
													icon={faCircleMinus}
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{d.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export const LayoutItemsListAdmin: FC<LayoutItemsListAdmin> = ({ data, category, section }) => {
	const router = useRouter()
  const onDeleteData = async (id: string) => {
    const data = {item: id, category: category, section: section }
    await axios.put(`${process.env.APIS_URL}/api/site/removeitem/${process.env.API_SITE}`, data)
    router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
									<img
										src={d.imageSrc}
										alt={d.name}
										className="w-full h-full object-contain"
									/>
									<div className="flex justify-end absolute right-1 bottom-1 bg-white rounded pt-1">
									<Link href={`/admin/sites/${router.query.category}/${router.query.section}/${d.href}`} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5 "
													icon={faPenToSquare}
												/>
											</a>
										</Link>
										<div onClick={() => onDeleteData(d._id)} >
											<a>
												<FontAwesomeIcon
													className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
													icon={faCircleMinus}
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{d.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};