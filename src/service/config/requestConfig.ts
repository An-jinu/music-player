import QueryString from 'qs';

export const createRequestURL = <T>(prefix: string) => {
  return (url: string, params?: T): string => {
    const combineUrl = `${prefix}${url}`;

    if (params === undefined) {
      return combineUrl;
    }

    return `${combineUrl}?${QueryString.stringify(params, { arrayFormat: 'comma' })}`;
  };
};
