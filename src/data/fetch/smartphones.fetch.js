const url = process.env.REACT_APP_API_URL;

export const fetchSmartphones = id => {
  const promise = fetch(`${url}/${id}`);
  return promise;
};

