import { Posts } from "./Posts/Posts"
import { SideBar } from "./SideBar/SideBar"
import './MainBlock.css'
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Favourite } from "../../pages/Favourite/Favourite"
import { POSTS_URL } from "../../utils/constans";
import { useFetchPosts } from "../../utils/hooks";

export const MainBlock = ({ setIsLoggedIn, isLoggedIn }) => {
	const postsData = useFetchPosts(POSTS_URL);

	return (
		<>
			<SideBar setIsLoggedIn={setIsLoggedIn} />
			<main className="mainBlock">
				<Route path="/blog">
					<Posts {...postsData}
					/>
				</Route>
				<Route exact path="/favourite" component={Favourite}>
					<Posts {...postsData} isLikedPosts
					/>
				</Route>
			</main>
		</>
	)
}