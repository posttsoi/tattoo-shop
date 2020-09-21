import {
  Record,
  Array,
  Number,
  String,
  Undefined,
  Static,
  Null,
} from 'runtypes';

export const Sizes = {
  S: 'SMALL',
  M: 'MEDIUM',
  L: 'LARGE',
  XL: 'EXTRA LARGE',
} as const;

const SizesAsArray = Object.keys(Sizes);

export const Colours = {
  B: 'Чёрный',
  W: 'Белый',
} as const;

const ColoursAsArray = Object.keys(Colours);

export const ProductCategories = {
  TattooSketch: 'TattooSketch',
  Sticker: 'Sticker',
  TShirt: 'TShirt',
} as const;

export type TattooSketch = {
  id: number;
  title: string;
  description?: string;
  vacant?: boolean;
  image?: string;
  slug: string;
};

const BaseProductStruct = {
  id: Number,
  title: String,
  description: String.Or(Null),
  price: String.withConstraint(
    (n) => parseFloat(n) >= 0 || 'price is less than zero (absurd!)',
  ),
  quantity: Number.withConstraint(
    (n) => n >= 0 || 'quantity must be more than zero',
  ),
  category: Number,
  image: String.Or(Null),
  slug: String,
};

export const BaseProduct = Record(BaseProductStruct);

export const TShirt = Record({
  ...BaseProductStruct,
  size: String.withConstraint(
    (str) => SizesAsArray.includes(str) || 'unknown size',
  )
    .Or(Undefined)
    .Or(Null),
  colour: String.withConstraint(
    (str) => ColoursAsArray.includes(str) || 'unknown colour',
  )
    .Or(Undefined)
    .Or(Null),
});

export const AllProducts = Record({
  [ProductCategories.TShirt]: Array(TShirt),
  [ProductCategories.Sticker]: Array(BaseProduct),
});

export type AllProductsType = Static<typeof AllProducts>;

export type AnyProduct = Partial<Static<typeof BaseProduct>>;
