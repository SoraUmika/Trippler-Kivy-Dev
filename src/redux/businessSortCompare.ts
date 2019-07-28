import Business from "./state/Business";
import { StrObj } from "../util/type";
import { IsOrderedCompare } from "../util/array";

export type SortMethod = "name" | "rating" | "avgRating";

export const BusinessCompareFunctions: StrObj<IsOrderedCompare<Business>> = {
	name: (l, r) => l.name <= r.name,
	rating: (l, r) => l.rating >= r.rating,
	avgRating: (l, r) => l.rating / l.ratingNum >= r.rating / r.ratingNum
};

export default function getCompareFunc(
	sortMethod: SortMethod,
	businesses: StrObj<Business>
): IsOrderedCompare<string> {
	const compareFunc = BusinessCompareFunctions[sortMethod];
	return (l, r) => compareFunc(businesses[l], businesses[r]);
}