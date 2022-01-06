import React from "react";
import { SingleAvatar } from "../../Components/Avatar/Avatar";
import Header from "../../Components/Header/Header";
import Typography from "../../Components/Typograhy/typography";
import { ContentLeft, ContentRight, Wrapper, Button } from './homePage.style'
import ImageA from '../../Assets/avatar.jpg';
import AvatarGroup from "../../Components/AvatarGroup/AvatarGroup";

export default function HomePage() {
	return (<>
		<Header />
		<Wrapper>
			<ContentLeft>
				<Typography variant="h1" fontSize="2rem" color=" #0A1929">
					The React
					<Typography variant="span" style={{ color: " blue" }}>
						UI library
					</Typography>
					you always wanted
				</Typography>
				<Typography color="#3E5060" lineHeight="1.5"
				>MUI provides a robust, customizable, and accessible library of
					foundational and advanced components, enabling you to build your
					own design system and develop React applications faster.
				</Typography>
				<Button to="/components/usage">Get started  <Typography variant="span" style={{ marginLeft: '2rem', color: 'white' }}>&gt;</Typography></Button>
			</ContentLeft>
			<ContentRight>
				<Typography variant="h1" color="#3E5060">  h1. Heading</Typography>
				<Typography variant="h2" color="#3E5060">  h2. Heading</Typography>
				<Typography variant="h3" color="#3E5060">  h3. Heading</Typography>
				<SingleAvatar kind='circular' avatar={<img src={ImageA} alt='lkf' />} hidden={false} src={ImageA} />
				<br />
				<SingleAvatar kind='rounded' avatar={<img src={ImageA} alt='lkf' />} hidden={false} src={ImageA} />
				<br />
				<SingleAvatar kind='square' avatar={<img src={ImageA} alt='lkf' />} hidden={false} src={ImageA} />
				<br/>
				<SingleAvatar kind='square' avatar="ahmad saleh" hidden={true} src={ImageA} uppercase={true} />
				<br />
				<AvatarGroup kind={'circular'} avatars={['Ahmad Saleh','','','']} displayAllOnHover={true} max={1} size={60} />
			</ContentRight>
		</Wrapper>;</>)
}
