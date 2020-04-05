import React, { useEffect, useState, lazy, Suspense } from "react";
import SearchBar from "../../common/SearchBar/SearchBar";
import { MainContainer, CardContainer } from "../MainScreen/MainScreen.styled";
import { searchData } from "../../Redux/store";
import BottomScrollListener from "react-bottom-scroll-listener";
import { NoSearch, Image } from "./SearchScreen.styled";
import assets from "../../assets";
import LazyLoad from "react-lazyload";
import { useSelector, useDispatch } from "react-redux";
import { get, isEmpty } from "lodash";

const Cards = lazy(() => import("../../common/Cards/Cards"));

const SearchScreen = () => {
	const [searchText, setSearch] = useState("");
	const { usersData } = useSelector((state) => state);
	const dispatch = useDispatch();
	const handleSearch = (text) => {
		let value = text.target.value;
		setSearch(value);
		dispatch(searchData(value));
	};
	return (
		<MainContainer>
			<SearchBar handleChange={handleSearch} />
			<CardContainer>
				{!searchText ? (
					<NoSearch>
						<Image src={assets.images.search} />
						Search to find items now
					</NoSearch>
				) : (
					<Suspense fallback={<NoSearch>Loading...</NoSearch>}>
						{usersData.map((item, i) => {
							return (
								<LazyLoad key={i} height={200} offset={100} placeholder={<p>Loading..</p>}>
									<Cards key={i} name={item.name} image={get(item, "poster-image")} />
								</LazyLoad>
							);
						})}
					</Suspense>
				)}
				{isEmpty(usersData) && searchText && (
					<NoSearch>
						<Image src={assets.images.search} />
						No result found
					</NoSearch>
				)}
			</CardContainer>
			)}
		</MainContainer>
	);
};

export default SearchScreen;
