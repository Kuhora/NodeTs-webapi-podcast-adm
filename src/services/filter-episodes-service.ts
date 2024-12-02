import { repositoryPodcast } from "../data/podcasts-repository"
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model"
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined

): Promise<PodcastTransferModel> =>{

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat = {
        statusCode: responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT,
        body: data,
    }

    return responseFormat;
}