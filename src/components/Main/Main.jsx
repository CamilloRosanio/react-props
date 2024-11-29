import MyCard from "../MyCard/MyCard.jsx";
import postsData from "../../data/postsData.jsx";


function Main() {

    // const PublishedPosts = posts.filter(post => post.published === true);

    console.log(postsData);

    return (
        <>
            <main>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="gallery d-flex justify-content-center">
                            <div className="row">
                                <MyCard
                                    prop1=""
                                    prop2=""
                                    prop3=""
                                    prop4=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main