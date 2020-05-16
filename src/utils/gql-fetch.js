/**
 * Hyper-fast, micro GraphQL fetcher
 *
 * @param option
 * @param options.query GraphQL query
 * @param options.variables GraphQL variables
 * @param options.url GraphQL endpoint
 */
export default function gqlFetch({ query, variables = {}, url = 'https://api.aniarchive.org' }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Connection: 'keep-alive',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
}
