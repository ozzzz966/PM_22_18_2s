import express, { Request, Response } from "express";
import cors from "cors";
import {skills, jobs, education, reference, contacts, interests, headerData} from './app/service/data_info.js'

const app = express();
app.use(cors());


app.get("/interests", (req: Request, res: Response) => {
  res.json(interests);
});

app.get("/headerData", (req: Request, res: Response) => {
  res.json(headerData);
});

app.get("/skills", (req: Request, res: Response) => {
  res.json(skills);
});

app.get("/jobs", (req: Request, res: Response) => {
  res.json(jobs);
});

app.get("/education", (req: Request, res: Response) => {
  res.json(education);
});

app.get("/reference", (req: Request, res: Response) => {
  res.json(reference);
});

app.get("/contacts", (req: Request, res: Response) => {
  res.json(contacts);
});

const PORT = 3100;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
