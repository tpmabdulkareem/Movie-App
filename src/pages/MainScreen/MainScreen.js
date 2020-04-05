import React, { useEffect, useState, lazy, Suspense } from "react";
import { MainContainer, CardContainer } from "./MainScreen.styled";
import TopBar from "../../common/TopBar/TopBar";
import { useSelector, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import { get } from "lodash";
import { NoSearch } from "../SearchScreen/SearchScreen.styled";
import { requestData } from "../../Redux/store";
import BottomScrollListener from "react-bottom-scroll-listener";
const Cards = lazy(() => import("../../common/Cards/Cards"));

const MainScreen = () => {
	//Redux Data
	const { usersData } = useSelector((state) => state);
	const dispatch = useDispatch();

	const [num, setNum] = useState(9);
	const [isLoading, setLoading] = useState(false);

	//Request on scroll
	useEffect(() => {
		dispatch(requestData(num));
	}, [num]);

	//Setting Loading condition
	useEffect(() => {
		setLoading(false);
	}, [usersData]);

	//Callback function executed on ScrollDown
	const handleScroll = () => {
		setNum(num + 6);
		setLoading(true);
	};

	return (
		<MainContainer>
			<TopBar />
			<BottomScrollListener onBottom={handleScroll}>
				{(scrollRef) => (
					<CardContainer ref={scrollRef}>
						<Suspense fallback={<NoSearch>Loading...</NoSearch>}>
							{usersData.map((item, i) => {
								return (
									<LazyLoad key={i} height={200} offset={100} placeholder={<p>Loading..</p>}>
										<Cards key={i} name={item.name} image={get(item, "poster-image")} />
									</LazyLoad>
								);
							})}
						</Suspense>
						{isLoading && <NoSearch>Loading...</NoSearch>}
					</CardContainer>
				)}
			</BottomScrollListener>
		</MainContainer>
	);
};

export default MainScreen;
