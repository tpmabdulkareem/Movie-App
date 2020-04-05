import React, { useEffect, useState } from "react";
import { ImageIcon } from "../TopBar/TopBar.styled";
import assets from "../../assets";
import { TopNav, Input } from "./SearchBar.styled";
import { useHistory } from "react-router-dom";

const SearchBar = ({ handleChange }) => {
	const history = useHistory();
	const handleBack = () => {
		history.push("/");
	};
	return (
		<TopNav>
			<ImageIcon src={assets.images.backArrow} onClick={handleBack} />
			<Input type="text" placeholder="Search.." name="search" onChange={handleChange} />
		</TopNav>
	);
};

export default SearchBar;
