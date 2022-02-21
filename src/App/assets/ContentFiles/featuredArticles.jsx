import OakleyPoke from '../../assets/oakley-01.png'
import DogWalkingWide from '../images/dog-walking-wide.png'
import DogWalkingSq from '../images/dog-walking-square.png'
import DogHiking from '../images/dog-hiking-sq.png';
import DogHikingWide from '../images/dog-hiking-wide.png';
import DogTreatsWide from '../images/dog-treats-wide.png'
import DogTreatsSq from '../images/dog-treats-sq.png'

const FeaturedArticleInfo = [

    {title: "Teach your dog to walk on a loose leash!",
    description: "Are walks no fun for you because your dog is dragging you around? This article will give you tips and tricks on how to correct that behavior!",
    date: "November 5, 2021",
    author: "Taylor Miller",
    image: DogWalkingWide,
    squareImage: DogWalkingSq,
    color: "bg-secondary", 
    link: "./teachyourdoghowtowalkonalooseleash"
    },

    {title: "My favorite treats!",
    description: "Need some new snacks to feed your fur baby? Looking for some healthy alternatives? Whatever you're looking for, you can find it here!",
    date: "November 20, 2021",
    author: "Oakley Miller",
    image: DogTreatsWide, 
    squareImage: DogTreatsSq,
    link: './myfavoritetreats',
    color: "blue-card",
    },

    {title: "Our Favorite Places to Hike!",
    author: "Matthew Miller",
    date: "November 12, 2021",
    description: "Have you ever wanted to take your dog for a mountain hike but didn't quite know where to go? Well here is a short list of fun places!",
    squareImage: DogHiking,
    image: DogHikingWide,
    link: './ourfavoriteplacestohike',
    color: "bg-primary"
    },
]

export default FeaturedArticleInfo;