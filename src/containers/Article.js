import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Data from '../components/data.json';

function Article() {
	const [article, setArticle] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const dataToSet = Data.find((item) => item.id === id);
		setArticle(dataToSet);
	}, [id]);

	if (!article) return <p>No Article</p>;

	return (
		<main>
			<section className="ArticleHeader">
				<div className="ArticleHeaderText">
					<h1 className="HeaderOneStyle">{article.title}</h1>
					<p className="ArticleCardDate">{article.publishedDate}</p>
					<p className="ArticleHeaderBlurb">{article.blurb}</p>
				</div>
			</section>

			<section className="ArticleText">
				{article.articleText &&
					article.articleText.map((text, i) => {
						switch (text.type) {
							case `p`:
								return <p key={i}>{text.data}</p>;

							case `h2`:
								return <h2 key={i}>{text.data}</h2>;

							case `h3`:
								return <h3 key={i}>{text.data}</h3>;
							default:
								break;
						}
					})}
				<h3>Header Three</h3>
			</section>
		</main>
	);
}

export default Article;
