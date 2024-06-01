import axios from 'axios';

export const fetchRepositories = () => {
  return axios
    .get(
      'https://api.github.com/users/nazifcand/repos?sort=stargazers_count&direction=asc'
    )
    .then((res) => [null, res.data])
    .catch((err) => [err.response]);
};

export const fetchVideos = () => {
  const { API_KEY, CHANNEL_ID } = process.env;
  return axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?channelId=${CHANNEL_ID}&type=video&part=snippet&order=date&key=${API_KEY}`
    )
    .then((res) => [null, res.data])
    .catch((err) => [err]);
};
