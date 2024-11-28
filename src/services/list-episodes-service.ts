import { repositoryPodcast } from "../data/podcasts-repository";

export const serviceListEpisodes = async ()=> {

    const data = await repositoryPodcast ;

return data;
};
