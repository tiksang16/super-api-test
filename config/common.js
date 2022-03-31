import qa from '../config/qa';
import supertest, { SuperTest } from "supertest";
const request = supertest(qa.baseUrl);

export default request;