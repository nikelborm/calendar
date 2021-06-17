import React, { forwardRef } from "react";
import { useState } from "react";

import Tippy from '@tippyjs/react';
import styled from 'styled-components';



export const Content = styled.div`
    position: absolute;
    box-sizing: border-box;
    padding: 5px 0 5px 20px;
    left:5px;
    right:5px;
    background: #FF2800;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    margin: 0;
    z-index:3;
    width: 200px;
`;

const Tip = styled.div`
	border: none;
	outline: none;
	position:relative;
	background: #EFEFEF;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, .5);	
	width: 400px;
	height: 250px;
	padding:5px 0 0 20px;
`;


const TipHeader = styled.h3`
	border: none;
	outline: none;
	font-family: 'IBM Plex Sans', sans-serif;
	display:flex;
`;

const TipItem = styled.div`
	border: none;
	outline: none;
	font-family: 'IBM Plex Sans', sans-serif;
	margin-bottom: 7px;
`;

const CustomChild = forwardRef((props, ref) => {
	return(
		<Content ref={ref}>
			<div>Название</div>
			<div>Время</div>
			<div>Класс</div>
		</Content>
	);
})

const CustomTippy = (
	<Tip>
		<TipHeader>
			<svg width="10" height="10">
				<rect x="0" y="0" rx="2" ry="2" width="10" height="10"
			      style={{'fill':'#FF2800', 'stroke-width':5}} />
			</svg>

			Пр. Английский язык
		</TipHeader>
		<TipItem>Понедельник, 24 мая 2021, время 8:00 - 9:50.</TipItem>
		<TipItem>* Офлайн, кабинет: 8-623</TipItem>
		<TipItem>Модуль: EngLang</TipItem>
		<TipItem>Преподаватель: Иосипов Иван Антонович</TipItem>
		<TipItem>Тема: 2. Говорим по-китайски и там можно еще как-то поговрить</TipItem>
		<TipItem>Группа: SSS-rank</TipItem>
	</Tip>);

function EventInfoTip() {
	const [visible, setVisible] = useState(false);

	const toggleButton = () => {
		setVisible(!visible);
	}

	return (
		<div>
			<Tippy content={CustomTippy} palcement={'right'} delay={[200, 100]} trigger={'click'} interactive={'true'}>
				<CustomChild />
			</Tippy>
		</div>);
}



export default EventInfoTip;
