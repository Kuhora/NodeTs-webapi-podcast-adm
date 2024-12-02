import { repositoryPodcast } from "../data/podcasts-repository";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    const data = await repositoryPodcast();

    responseFormat = {
        statusCode: responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT,
        body: data,
    }

return responseFormat;
};
