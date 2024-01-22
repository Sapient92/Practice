export default class WebToonList {
  constructor(provider, day) {
    this.baseUrl = `https://korea-webtoon-api.herokuapp.com`;
    this.provider = provider;
    this.day = day;
  }

  async getProviderWebToon() {
    const providerResponse = this.provider.map(async (data) => {
      const response = await fetch(
        `${this.baseUrl}/?service=${data}&perPage=25`
      );
      const providerRes = await response.json();
      return providerRes;
    });
    const providerResult = await Promise.all(providerResponse);
    return providerResult;
  }

  async getDayWebToon() {
    const dayResponse = await Promise.all(
      this.day.map(async (data) => {
        let dayRes = [];
        for (let i = 0; i < this.provider.length; i++) {
          const response = await fetch(
            `${this.baseUrl}/?service=${this.provider[i]}&updateDay=${data}&perPage=25`
          );
          const responseData = await response.json();
          dayRes.push(responseData);
        }
        return dayRes;
      })
    );
    return dayResponse;
  }
}

export class Search {
  async webToonSearch(keyword) {
    const response = await fetch(
      `https://korea-webtoon-api.herokuapp.com/search?keyword=${keyword}`
    );
    const search = response.json();
    return search;
  }
}

export const dayWebToons = async (provider, day) => {
  const dayWebToonResponse = await fetch(
    `https://korea-webtoon-api.herokuapp.com/?service=${provider}&updateDay=${day}&perPage=25`
  );
  const dayWebToon = await dayWebToonResponse.json();
  return dayWebToon;
};
