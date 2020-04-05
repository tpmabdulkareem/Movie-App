import React from "react";
import { CardDiv, DisplayImage, Text } from "./Cards.styled";

const Cards = ({ name = "unknown", image }) => {
	return (
		<CardDiv>
			<DisplayImage src={require(`../../assets/images/${image}`)} />
			<Text>{name}</Text>
		</CardDiv>
	);
};

export default Cards;
