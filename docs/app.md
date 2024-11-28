# Library Podcast

### Description

An application that separates podcasts with different categories and episodes

### Domain

Podcasts videos

### Features

- List podcasts in category sections
  - [Health, Fitness, mentality, humor]
- Filter episodes by name


## How

I will return in an api rest (json) 
the name of the podcast, the name of the episode, thumbnail, category and link.

```js
[
{
    podcastName: "PowerfulJRE",
    episodeName: "Joe Rogan Experience #2187 - Adam Sandler",
    videoId: "4T_0Tcts6aM",
    cover: "https://i.ytimg.com/vi/4T_0Tcts6aM/hqdefault.jpg",
    link: "https://youtu.be/4T_0Tcts6aM",
    category: ["actor", "comedian"],


},
{
    podcastName: "PowerfulJRE",
    episodeName: "Joe Rogan Experience #1278 - Kevin Hart ",
    cover: "https://i.ytimg.com/vi/XW_KhFq4LQo/hqdefault.jpg",
    videoId: "XW_KhFq4LQo",
    link: "https://youtu.be/XW_KhFq4LQo",
    category: ["actor", "comedian"],


},

]
```
