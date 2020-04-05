import styled, { css } from "styled-components";

export const CardDiv = styled.div`
	padding: 10px 10px 30px 10px;
`;

export const DisplayImage = styled.img`
	height: 150px;
	width: 100%;
	object-fit: contain;
`;

export const Text = styled.p`
	font-size: 15px;
	color: #ffff;
	padding: 0;
	margin: 0;
	width: 100px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
