import React, { useEffect, useState } from "react";
import { TopNav, ArrowLeft, SearchIcon, ImageIcon, Text } from "./TopBar.styled";
import assets from "../../assets";
import { useHistory } from "react-router-dom";

const TopBar = () => {
	const history = useHistory();
	const handleSearch = () => {
		history.push("/search");
	};
	const handleBack = () => {
		history.push("/");
	};
	return (
		<TopNav>
			<ArrowLeft>
				<ImageIcon src={assets.images.backArrow} onClick={handleBack} />
				<Text>Romantic Comedy</Text>
			</ArrowLeft>
			<SearchIcon onClick={handleSearch}>
				<ImageIcon src={assets.images.search} />
			</SearchIcon>
		</TopNav>
	);
};

export default TopBar;
