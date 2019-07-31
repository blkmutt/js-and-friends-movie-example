import TheMovieDb from "@leonardocabeza/the-movie-db";

const v3ApiKey = "89a1a6500311a41b1a4c35541871e047";
const v3Client = new TheMovieDb(v3ApiKey);

const { movie, search } = v3Client;

export default v3Client;

export { movie, search };
