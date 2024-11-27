import {IncomingMessage, ServerResponse} from 'http';


export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) =>{
    res.writeHead(200, {'content-type': "application/json"});
    res.end(
        JSON.stringify([
    {
        podcastName: "PowerfulJRE",
        episodeName: "Joe Rogan Experience #2187 - Adam Sandler",
        videoId: "4T_0Tcts6aM",
        category: ["actor", "comedian"],


    },
    {
        podcastName: "PowerfulJRE",
        episodeName: "Joe Rogan Experience #1278 - Kevin Hart ",
        videoId: "XW_KhFq4LQo",
        category: ["actor", "comedian"],
    },
])
); 
};