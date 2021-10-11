import './_video.scss';
import { AiFillEye } from "react-icons/ai"
import { useEffect, useState } from 'react';
import request from '../../api';
import moment from 'moment'
import numeral from 'numeral'

const Video = ({ video }) => {

    
    
    const { id, snippet: {
        channelTitle,
        publishedAt,
        channelId,
        thumbnails: { medium },
        title,
    } } = video;
    
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    
    const seconds = moment.duration(duration).asSeconds();
    const time = moment.utc(seconds * 1000).format("mm: ss");
    
    const _videoId = id?.videoId || id;


    const get_video_details = async () => {
        const { data: { items } } = await request('/videos', {
            params: {
                part: 'contentDetails,statistics',
                id: _videoId,
            }
        })
        setViews(items[0].statistics.viewCount);
        setDuration(items[0].contentDetails.duration);
    }

    const get_channel_icon = async () => {
        const {
            data: { items },
        } = await request('/channels', {
            params: {
                part: 'snippet',
                id: channelId
            }
        })

        setChannelIcon(items[0].snippet.thumbnails.medium.url);
    }

    useEffect(() => {
        get_video_details();
        get_channel_icon();
    }, [_videoId])

    return (
        <div className="video">

            <div className="video__top">
                {/* <img src="https://i.ytimg.com/vi/aEiznLJCb9o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLABGk-Yrm8laj69iXy7kusH6JJZvg" alt="" /> */}
                <img src={medium.url} alt="" />
                <span className='video__top__duration'>{time}</span>
            </div>

            <div className="video__title">
                {title}
            </div>

            <div className="video__details">
                <span><AiFillEye /> {numeral(views).format("0.a")} views •  </span>
                <span>  {moment(publishedAt).fromNow()}</span>
            </div>

            <div className="video__channel">
                <img src={channelIcon } alt="" />
                <p>{channelTitle}</p>
            </div>

        </div>
    )
}

export default Video
