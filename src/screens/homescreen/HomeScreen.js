import { Col, Container, Row } from "react-bootstrap"
import "./_homeScreen.scss"
import Video from '../../components/video/Video'
import CatagoriesBar from '../../components/catagoriesBar/CatagoriesBar'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action"
import { useSelector } from "react-redux"
import InfiniteScroll from 'react-infinite-scroll-component'

const HomeScreen = () => {


    const dispatch = useDispatch();
    const {videos,activeCategory,nextPageToken} = useSelector(state => state.homeVideos); 


    console.log(nextPageToken)

    useEffect(()=>{
        dispatch(getPopularVideos())
    },[dispatch])

    const fetchData = () => {
        if(activeCategory === "All"){
            dispatch(getPopularVideos())
        }else{
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <Container>
            <CatagoriesBar/>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'></div>
                }
            >
            <Row>
                {
                    videos.map((video)=> (
                        <Col lg={3} md={4}>
                            <Video key={video.id} video={video} />
                        </Col>
                    ))
                }
            </Row>
            </InfiniteScroll>
        </Container>
    )
}

export default HomeScreen
