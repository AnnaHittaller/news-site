import ArticleCard from "./ArticleCard";
import Header from "./Header";

function HomePage() {
	return (
		<div>
			<Header />
			<div className="page">
				<h1>The most important business & sports news of the day</h1>
				<div className="card-grid">
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
