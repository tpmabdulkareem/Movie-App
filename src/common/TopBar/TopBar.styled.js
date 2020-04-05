import styled, { css } from "styled-components";

export const TopNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 30px 2px 30px;
	top: 0;
	box-shadow: 0px 14px 37px 15px #000;
	position: sticky;
	z-index: 1;
`;

export const ArrowLeft = styled.div`
	display: flex;
	align-items: center;
`;

export const ImageIcon = styled.img`
	height: 20px;
	width: 20px;
	object-fit: contain;
`;

export const Text = styled.p`
	padding: 0 10px 0 10px;
	/* font-weight: bold; */
	font-size: 20px;
`;
export const SearchIcon = styled.div``;
