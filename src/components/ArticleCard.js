import '../style/articleCard.css'

function ArticleCard() {




    return (
			<div className='card'>
				<img src="https://picsum.photos/300/200" alt="" />
                <div className='card-data'>
				<span>Category</span>
				<h3>Article Title</h3>
				<p>Publication Date</p>

                </div>
			</div>
		);
}

export default ArticleCard;