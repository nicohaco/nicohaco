// @flow

export const fetchUserData = (id: string) => ({
  type: 'FETCH_USER_DATA',
  id
});

export const fetchUserTimeline = (id: string) => ({
  type: 'FETCH_USER_TIMELINE',
  id
});

export const fetchUserMylists = (id: string) => ({
  type: 'FETCH_USER_MYLISTS',
  id
});

export const fetchUserVideos = (id: string) => ({
  type: 'FETCH_USER_VIDEOS',
  id
});

export const fetchMyTimeline = () => ({
  type: 'FETCH_MY_TIMELINE',
});

export const fetchMyFollowing = () => ({
  type: 'FETCH_MY_FOLLOWING'
});
