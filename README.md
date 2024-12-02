# Podcast Administration

## Description

An application that separates podcasts with different categories and episodes

## Features

- List podcasts in category sections [Health, Fitness, mentality, humor]**
- Filter episodes by name

## How

- Return in an api rest (json) the name of the podcast, the name of the episode, thumbnail, category and link.


### List podcast episodes in category sections

- **Endpoint:** `GET /list`
- **Description:** Returns a list of podcast episodes organized by categories.
- **Example answer:**

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

### Filter episodes by podcast name

- **Endpoint:** `GET /episode?podcastName={nome}`
- **Description:** Returns a list of podcast episodes based on the given podcast name.
- **Example request:** `GET /episode?podcastName=PowerfulJRE`

## Technologies Used

- **[TypeScript](https://www.typescriptlang.org/):** Programming language used for project development.
- **[Tsup](https://github.com/egoist/tsup):** Building and packaging tool for TypeScript projects.project development
- **[Tsx](https://github.com/egoist/tsx):** TypeScript compiler that supports building projects.
- **[Node.js](https://nodejs.org/):** JavaScript execution environment that allows you to execute JavaScript code server-side.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Type definitions package for Node.js to assist with TypeScript development.

## How to Use

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server by running `start:dev`.
4. Access the provided endpoints to list podcast episodes or filter them by podcast name.
