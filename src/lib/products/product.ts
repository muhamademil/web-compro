import Backendless from "../backendless";

export interface IProduct {
  category: string;
  description: string;
  imageUrl: string;
  price: string;
  title: string;
}

export const getProducts = async (
  limit?: number,
  category?: string
): Promise<IProduct[]> => {
  try {
    const list = await Backendless.DataQueryBuilder.create();

    if (category) {
      list.setWhereClause(`Category : '${list}'`);
    }

    const products = await Backendless.Data.of("products").find<IProduct>(list);

    return limit ? products.slice(0, limit) : products;

    // console.log("ini dataaa", data);
  } catch (error) {
    console.error("error fetching background image : ", error);
    return [];
  }
};
