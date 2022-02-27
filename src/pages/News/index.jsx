import {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateNewsPage } from "../../store/reducers/newsReducerDuck"
import NewsService from "../../services/NewsService"
import NewsBox from "../../components/NewsBox"

function getNews(state) {
	return state.news.newsPage
}
function News(props) {
	const dispatcher = useDispatch()
	const news = useSelector(getNews)
	useEffect(() => {
		NewsService.latest()
			.then(
				res => {
					dispatcher(updateNewsPage(res))
					console.log(res)

				},
				console.log
			)
	}, [])
	return (
		<section>
			{
				!!news.length && (<NewsBox info={news} content={"Latest News"} title={true} />)
			}
		</section>
	);
}

export default News;