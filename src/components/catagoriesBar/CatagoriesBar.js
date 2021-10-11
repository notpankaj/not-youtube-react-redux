import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import "./_categoriesBar.scss"




const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
];




const CatagoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All');

    const dispatch = useDispatch();

    const handleClick = (value) => {
        setActiveElement(value);

        if (value === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((value, i) => (
                    <span
                        className={value === activeElement ? "active" : ""}
                        onClick={() => handleClick(value)}
                        key={i} >
                        {value}
                    </span>
                ))
            }
        </div>
    )
}

export default CatagoriesBar
