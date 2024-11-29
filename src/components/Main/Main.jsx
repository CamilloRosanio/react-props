import MyCard from "../MyCard/MyCard.jsx";
import posts from '../../data/postsData.jsx';


function Main() {

    return (
        <>
            <main>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="gallery d-flex justify-content-center">
                            <div className="row">
                                <MyCard />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main