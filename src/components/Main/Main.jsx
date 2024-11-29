import MyCard from "../MyCard/MyCard.jsx";
import postsData from "../../data/postsData.jsx";


function Main() {

    const PublishedPosts = postsData.filter(post => post.published == true);

    console.log(PublishedPosts);

    return (
        <>
            <main>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="gallery d-flex justify-content-center">
                            <div className="row g-4">
                                {PublishedPosts.map((post) => (
                                    <MyCard
                                        id={post.id}
                                        title={post.title}
                                        image={post.image}
                                        content={post.content}
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