const FetchGraphQL = async (
  query,
  host = process.env.ENDPOINT,
  token = process.env.ACCESS_TOKEN
) => {
  const opts = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  const results = await fetch(host, opts)
    .then((res) => res.json())
    .catch(console.error);
  return results;
};

export default FetchGraphQL;
