class Github {
  constructor() {
    this.client_id = "83cad9af0036b4616f6d";
    this.client_secret = "eb094e4712d39ae6ed95007aecc8179816772530";
    this.repos_count = 5;
    this.repos_sort = "created: asc"; // created = 데이터를 생성 날짜에 따라 정렬한다, asc = 오름차순으로
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return { profile, repos }
  }
}
