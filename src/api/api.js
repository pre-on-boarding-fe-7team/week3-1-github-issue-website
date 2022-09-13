import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

const getIssues = async (owner, repo, params = {}) => {
  const res = await api.get(`${owner}${repo}/issues`, {
    params: { ...params },
  });
  return res.data;
};

export { getIssues };
