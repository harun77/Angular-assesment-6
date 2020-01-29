import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmsService {
  // baseUrl = "http://localhost/ems";
  baseUrl = "http://192.168.11.176/ems/";

  constructor(private http: HttpClient) {}

  getEmployee() {
    let url = `${this.baseUrl}read.php`;
    return this.http.get(url);
  }

  createEmployee(data: any) {
    let url = `${this.baseUrl}create.php`;
    console.log(url);
    return this.http.post(url, JSON.stringify(data));
  }

  updateEmployee(data: any) {
    let url = `${this.baseUrl}update.php`;
    return this.http.put(url, JSON.stringify(data));
  }

  deleteEmployee(data: any) {
    console.log(data);
    let url = `${this.baseUrl}delete.php?id=${data}`;
    return this.http.delete(url);
  }
}
