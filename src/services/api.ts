/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * API Wrapper for the app
 * @flow
 */
import Config from 'react-native-config';
import { format } from '@utils/query-params';

type Verbs = 'get' | 'post' | 'put' | 'patch' | 'delete';

type HTTPVerb = Verbs[];

type APIOptions = {
  customBaseUrl?: string;
  queryParams?: DynamicObject;
  fetchOptions: RequestInit;
};

const { BASE_URL } = Config;

/**
 * Supported HTTP verbs to implement as methods.
 */
const methods: HTTPVerb = ['get', 'post', 'put', 'patch', 'delete'];

/**
 * Parse the API endpoint string.
 *
 * @param {string} endpoint - Endpoint.
 * @param {string} customBaseUrl - Custom base URL ex: Third Party URLs.
 *
 * @example
 *
 *   parseEndpoint('article/block/') #=> 'http://host/article/block/'
 *
 * @returns ParsedEndpoint: string
 */
const parseEndpoint = (
  endpoint: string,
  customBaseUrl: string = '',
): string => {
  const tailoredBaseURL = customBaseUrl || BASE_URL;

  return tailoredBaseURL ? `${tailoredBaseURL}${endpoint}` : '';
};

/**
 * API wrapper.
 *
 * @param {string} endpoint - Endpoint to request.
 * @param {object} options - Options object for `fetch`.
 * @param {function} dispatch - Callback function.
 *
 * @returns {promise}
 */
const api = async (endpoint: string, options: APIOptions) => {
  const url = parseEndpoint(endpoint, options.customBaseUrl);
  let fetchOptions: RequestInit = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  /**
   * You can further extend the fetchOptions to include more options such as:
   *
   * fetchOptions.headers.authorization = getAuthorizationHeader();
   */

  // Allow overwriting default fetch options with user's custom options.
  fetchOptions = { ...fetchOptions, ...options.fetchOptions };

  const queryParams = { ...options.queryParams };

  // Append query params.
  const finalURL = `${url}${format(queryParams)}`;

  try {
    const resJson = await fetch(finalURL, fetchOptions);

    return await resJson.json();
  } catch (err) {
    return err;
  }
};

const attachVerbs = (
  httpMethods: HTTPVerb,
  constructApi: (endpoint: string, options: APIOptions) => any,
) => {
  const httpMethodConstruct: DynamicObject = {};

  // Attach convenience method
  httpMethods.forEach((method: Verbs): void => {
    const verb = method.toUpperCase();

    httpMethodConstruct[method] = (endpoint: string, options: APIOptions) => {
      const fetchOpt =
        options && options.fetchOptions ? options.fetchOptions : {};

      const newOptions = {
        ...options,
        fetchOptions: {
          ...fetchOpt,
          method: verb,
        },
      };

      return constructApi(endpoint, newOptions);
    };
  });

  return httpMethodConstruct;
};

export default attachVerbs(methods, api);
