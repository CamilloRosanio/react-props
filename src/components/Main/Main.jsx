import MyCard from "../MyCard/MyCard.jsx";
import postsData from "../../data/postsData.jsx";


function Main() {

    const PublishedPosts = postsData.filter(post => post.published == true);

    console.log(PublishedPosts);

    const tagList = [];

    for (let i = 0; i < PublishedPosts.length; i++) {
        let currentPost = PublishedPosts[i];

        currentPost.tags.forEach(tag => {
            if (!tagList.includes(tag)) {
                tagList.push(tag);
            }
        })

    }

    console.log(tagList);


    return (
        <>
            <main>
                <div className="container">
                    <ul className="tagList">
                        {tagList.map(tag => (
                            <li className={'postTag ' + tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="gallery d-flex justify-content-center">
                            <div className="row g-4">
                                {PublishedPosts.map((post) => (
                                    <MyCard
                                        id={post.id}
                                        title={post.title}
                                        image={post.image}
                                        content={post.content}
                                        tags={post.tags}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main