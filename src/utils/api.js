class Api {
  constructor(config) {
    this.HEADERS = config.HEADERS;
    this.URL = config.URL;
    this.TASKS = config.TASKS;
    this.ERROR_TEXT = config.ERROR_TEXT;
  }

  // get tasks
  getData() {
    return fetch(`${this.URL}${this.TASKS}`, {
      headers: this.HEADERS,
    })
      .then(this.checkServerResponse);
  }

  // check response from server
  checkServerResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`${this.ERROR_TEXT} ${res.status}`));
    }
    return res.json();
  }
}

const api = new Api({
  HEADERS: {
    'Content-Type': 'application/json',
    "'Accept'": 'application/json',
  },
  URL: '',
  TASKS: 'json/allData.json',
  ERROR_TEXT: 'ERROR: ',
});

export default api;
