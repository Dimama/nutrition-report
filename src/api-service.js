import { apiBase } from "./const";


export  default class APIService {
  _get = async (url) => {
    const res = await fetch(`${apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`)
    }
    return await res.json();
  };

  _post = async (url, data) => {
    const res = await fetch(`${apiBase}${url}`, {method: 'POST',
                                                            body: JSON.stringify(data),
                                                            headers:{'Content-Type': 'application/json'}});
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`)
    }
    return await res.json();
  };

  getPatients = async () => {
    const data = await this._get('/patient');
    return data.patients.map(patient => patient.name);
  };

  addPatient = async (name) => {
    const res = await this._post('/patient', {name: name});
    return res.message;
  };

  addReport = async (data) => {
    const res = await this._post('/report', {data: data});
    return res.message;
  }
};