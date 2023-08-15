import fetch from 'cross-fetch';
import { parseOptions } from './utils';
import Instances from './instances';
import Language from './types/languages';

const BASE_URL_V3 = 'https://api.themoviedb.org/3';

export class Api {
  
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async get<T>(path: string, options?: Record<string, any>): Promise<T> {
    
    /// get store language
    const language = Instances.get<string>("language") ?? Language.ENGLISH;


    /// check if language is not set
    if(!Object.hasOwnProperty.call(options, "language")) {
      options = {...options, language};
    }

    
    
    const params = parseOptions(options);


    const response = await fetch(`${BASE_URL_V3}${path}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return (await response.json()) as T;
  }
}
