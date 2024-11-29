import { repositoryPodcast } from "../data/podcasts-repository";

export const serviceListEpisodes = async (queryString: string = "")=> {

    const data = await repositoryPodcast ;

return data;
};
