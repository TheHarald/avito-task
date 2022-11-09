

const storiesUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';
const storyUrl = 'https://hacker-news.firebaseio.com/v0/item/';

export const getStoryIds = async () => {
    const response = await fetch(storiesUrl);
    const storyIds = await response.json();
    return storyIds.slice(0, 100);
}

export const getStory = async (storyId: number) => {
    const response = await fetch(`${storyUrl + storyId}.json`);
    const story = await response.json();
    return story;
}

