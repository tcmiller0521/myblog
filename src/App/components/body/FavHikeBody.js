import blogContent from "../../assets/ContentFiles/blogContent";

const FavHikeBody = () => {

    return (
        <>
            <div className='mb-5'>
                <p className="blog-content">
                    {blogContent[2].p1}
                </p>
                <p className="blog-content">
                    {blogContent[2].p2}
                </p>
                <p className="blog-content">
                    {blogContent[2].p3}
                </p>
                <p className="blog-content">
                    {blogContent[2].p4}
                </p>
                <p className="blog-content">
                    {blogContent[2].p5}
                </p>
            </div>
        </>
    )
}

export default FavHikeBody;