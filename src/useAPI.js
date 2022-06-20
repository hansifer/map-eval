import { useQuery } from 'react-query';
import axios from 'axios';

// use like this in an App child comp:
// `const { status, data, error, isFetching } = useAPI('cats', 'https://api.thecatapi.com/v1/images/search');`

export function useAPI(name, url) {
  return useQuery([name], async () => {
    const { data } = await axios.get(url);
    return data;
  });
}
