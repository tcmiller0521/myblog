import blogContent from "../../assets/ContentFiles/blogContent";

const ArticleBody = () => {

    return (
        <>
            <div className='mb-5'>
                <p className="blog-content">
                    {blogContent[0].p1}
                </p>
                <p className="blog-content">
                    {blogContent[0].p2}
                </p>
                <p className="blog-content">
                    {blogContent[0].p3}
                </p>
                <p className="blog-content">
                    {blogContent[0].p4}
                </p>
                <p className="blog-content">
                    {blogContent[0].p5}
                </p>
            </div>
        </>
    )
}

export default ArticleBody;