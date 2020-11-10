import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  photo: string,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  photo: Yup.string(),
  count: Yup.number(),
  price: Yup.number().required(),
});
