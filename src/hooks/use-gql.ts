import { useEffect, useState } from '/web_modules/preact/hooks.js';

interface GQLOptions<T> {
  query: string;
  url: string;
  variables: T;
}

export type GraphqlResponse<T> =
  | {
      data: null;
      errors: null;
    }
  | {
      data: T;
      errors: null;
    }
  | {
      data: null;
      errors: GraphqlError[];
    };

export interface GraphqlError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string;
  extensions?: {
    type?: string;
  };
}

const useGql = <Data, Variables>(options: GQLOptions<Variables>) => {
  const { url, query, variables } = options;

  const [data, setData] = useState<Data | null>(null);
  const [errors, setErrors] = useState<GraphqlError[] | null>(null);

  useEffect(() => {
    const req = async () => {
      setData(null);
      setErrors(null);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Connection: 'keep-alive',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      }).catch((e: Response) => Promise.reject(e));

      const body: GraphqlResponse<Data> = await response.json();

      setData(body.data);
      setErrors(body.errors);
    };

    req();
  }, []);

  return { data, errors };
};

export default useGql;
