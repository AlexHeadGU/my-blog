import { Posts } from "./Posts/Posts"
import { SideBar } from "./SideBar/SideBar"
import './MainBlock.css'
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Favourite } from "../../pages/Favourite/Favourite"
import { POSTS_URL } from "../../utils/constans";
import { useFetchPosts } from "../../utils/hooks";
import { NoMatch } from "../../pages/NoMatch/NoMatch";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";

export const MainBlock = ({ setIsLoggedIn }) => {
	const postsData = useFetchPosts(POSTS_URL);

	return (
		<>
			<SideBar setIsLoggedIn={setIsLoggedIn} />
			<main className="mainBlock">
				<Switch>
					<Route path="/blog">
						<Posts title="Posts" {...postsData}
						/>
					</Route>
					<Route path="/favourite" component={Favourite}>
						<Posts title="Favourite posts" {...postsData} isLikedPosts />
					</Route>
					<Route exact path="/">
						<Redirect to="/blog" />
					</Route>

					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</main>
		</>
	)
}