import axios from 'axios';
import { selectFields } from '../utils/selectFields'

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/` //aguarda o ID

export const getStory = async(storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data)); //operator checking if it's not null

    return result;
}


export const getStoryIds = async () => {
  const result = await axios
    .get(newStoriesUrl)
    .then(({data}) => data); //important destructuring

    return result;
}