const mongoose = require("mongoose");
const config = require("config");

const db = config.get("db");
mongoose
  .connect(db)
  .then(() => console.log(`connected to ${db} db`))
  .catch((err) => console.log(err.message));

const courseSchema = new mongoose.Schema({
  name: { type: String, minlength: 5, maxlength: 25 },

  author: { type: String, minlength: 5, maxlength: 20 },

  startDate: {
    type: Date,
    default: Date.now(),
  },
  tags: {
    type: String,
    enum: ["Nodejs", "frontend"],
  },

  price: { type: Number, min: 100, max: 200 },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "NodeJS Course",
    author: "Harry",
    tags: ["NodeJS", "frontend"],
    price: 180,
    isPublished: false,
  });

  await course.save();

  console.log(course);
}
createCourse();

async function getCourses() {
  const courses = await Course.find({ author: "Ram" });
  console.log(courses);
}
//getCourses();

async function getCourseLimit() {
  const courses = await Course.find().limit(1);
  console.log(courses);
}
//getCourseLimit();

async function getCourseSkip() {
  const courses = await Course.find().skip(1);
  console.log(courses);
}

//getCourseSkip();

async function getCourseSort() {
  const courses = await Course.find().sort();
  console.log(courses);
}
//getCourseSort();

async function getCoursesAnd() {
  const courses = await Course.find({
    $and: [{ author: "Harry" }, { price: 120 }],
  });
  console.log(courses);
}

//getCoursesAnd();

async function getCoursesOR() {
  const courses = await Course.find({
    $or: [{ author: "Harry" }, { author: "Roy" }],
  });
  console.log(courses);
}

//getCoursesOR();

async function getCoursesLT() {
  const courses = await Course.find({
    price: { $lt: 140 },
  });
  console.log(courses);
}
//getCoursesLT();

async function getCoursesLTE() {
  const courses = await Course.find({
    price: { $lte: 120 },
  });
  console.log(courses);
}
//getCoursesLTE();

async function getCoursesGT() {
  const courses = await Course.find({
    price: { $gt: 140 },
  });
  console.log(courses);
}

//getCoursesGT();

async function getCoursesGTE() {
  const courses = await Course.find({
    price: { $gte: 140 },
  });
  console.log(courses);
}

//getCoursesGTE();

async function getCoursesEq() {
  const courses = await Course.find({
    price: { $eq: 140 },
  });
  console.log(courses);
}

//getCoursesEq();

async function getCoursesNe() {
  const courses = await Course.find({
    price: { $ne: 140 },
  });
  console.log(courses);
}

//getCoursesNe();

async function getCoursesIn() {
  const courses = await Course.find({
    price: { $in: [140, 100] },
  });
  console.log(courses);
}

//getCoursesIn();

async function getCoursesNin() {
  const courses = await Course.find({
    price: { $nin: [140, 100] },
  });
  console.log(courses);
}

//getCoursesNin();
async function regex() {
  const courses = await Course.find({
    author: { $regex: "Ro" },
  });
  console.log(courses);
}

//regex();

async function updateCourse(id) {
  const result = await Course.findByIdAndUpdate(
    id,
    {
      $set: { price: 200 },
    },
    { new: true }
  );
  console.log(result);
}

//updateCourse("6230657a40cec889fff11ada");

async function removeCourse(id) {
  const course = await Course.findByIdAndDelete(id);

  console.log(course);
}

//removeCourse("6230657a40cec889fff11ada");
