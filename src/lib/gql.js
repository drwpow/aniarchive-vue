export default function gql({ url, query, variables }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Connection: 'keep-alive',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }).then(resp => resp.json());
}
