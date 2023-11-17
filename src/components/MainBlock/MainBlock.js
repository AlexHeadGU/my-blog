import { Posts } from "../../pages/BlogPage/BlogPage"
import { SideBar } from "./SideBar/SideBar"
import './MainBlock.css'
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Favourite } from "../../pages/Favourite/Favourite"
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { BlogPostPage } from "../../pages/BlogPostPage/BlogPostPage";

export const MainBlock = ({ setIsLoggedIn, postsData }) => {

	return (
		<>
			<SideBar setIsLoggedIn={setIsLoggedIn} />
			<main className="mainBlock">
				<Switch>
					<Route exact path="/blog">
						<Posts title="Posts" {...postsData}
						/>
					</Route>
					<Route exact path="/favourite" component={Favourite}>
						<Posts title="Favourite posts" {...postsData} isLikedPosts />
					</Route>
					<Route path='/blog/:postId'>
						<BlogPostPage setBlogPosts={postsData.setBlogPosts}/>
					</Route>
					<Route exact path="/">
						<Redirect to="/blog" />
					</Route>
				</Switch>
			</main>
		</>
	)
}