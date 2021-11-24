import blogContent from "../../assets/ContentFiles/blogContent";

const DogTreatsBody = () => {

    return (
        <>
            <div className='mb-5'>
                <p className="blog-content">
                    {blogContent[1].p1}
                </p>
                <p className="blog-content">
                    {blogContent[1].p2}
                </p>
                <p className="blog-content">
                    {blogContent[1].p3}
                </p>
                <p className="blog-content">
                    {blogContent[1].p4}
                </p>
                <p className="blog-content">
                    {blogContent[1].p5}
                </p>
            </div>
        </>
    )
}

export default DogTreatsBody;