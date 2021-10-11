import axios from "axios";
import request from "../../api";
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../reducers/actionTypes"

export const getPopularVideos = () => async (dispatch,getState) => {


    dispatch({ type: HOME_VIDEOS_REQUEST })
    
    
    try{ 
        const res = await request('/videos',{
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                maxResults: 20,
                pageToken : getState().homeVideos.nextPageToken,
            }
        })
        
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: res.data.items,
                nextPageToken : res.data.nextPageToken,
                category: 'All'
            }
        })
        
        
    }catch(error){
        dispatch({ type: HOME_VIDEOS_FAIL , payload: error.message})
    }
    
    
    
}

export const getVideosByCategory = (keyword) => async (dispatch,getState) => {
    
    // alert("HERE")
    dispatch({ type: HOME_VIDEOS_REQUEST })
    
    try{ 
        const res = await request('/search',{
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                type: 'video',
                q: keyword               
            }
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: res.data.items,
                nextPageToken : res.data.nextPageToken,
                category: keyword
            }
        })

    }catch(error){
        dispatch({ type: HOME_VIDEOS_FAIL , payload: error.message})
    }

}