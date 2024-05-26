import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import { questions, answers } from "../database/data.js";

export const getQuestions = async (req, res) => {
  try {
    const question = await Questions.find();
    res.json(question);
  } catch (error) {
    res.json({ error });
  }
};

export const addQuestions = async (req, res) => {
  try {
    await Questions.insertMany(
      { questions, answers },
      res.json({ msg: "Data saved successfully" })
    );
  } catch (error) {
    res.json({ error });
  }
};

export const deleteQuestions = async (req, res) => {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Data delete successfully" });
  } catch (error) {
    res.json({ error });
  }
};

//RESULT

export const getResult = async (req, res) => {
  try {
    const r = await Result.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
};
export const addResult = async (req, res) => {
  try {
    const { userName, result, attempts, achives } = req.body;
    if (!userName && !result) throw new Error("Data not provided");
    Result.create(
      { userName, result, attempts, achives },
      res.json({ msg: "Result saved successfully" })
    );
  } catch (error) {
    res.json({ error });
  }
};
export const deleteResult = async (req, res) => {
  try {
    await Result.deleteMany();
    res.json({ msg: "Result delete successfully" });
  } catch (error) {
    res.json({ error });
  }
};
