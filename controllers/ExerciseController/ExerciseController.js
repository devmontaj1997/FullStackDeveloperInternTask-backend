import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create exercise Controllers
/**
 * @description: this exercise get Controller
 * @route: /api/v1/exercise
 * @access: public
 * @method: get
 */

export const getExercise = expressAsyncHandler(async (req, res) => {
  const allExercises = await prisma.Exercise.findMany();
  res.status(200).json({ allExercises, message: " Here is all Exercises" });
});
/**
 * @description: this getsaveExerciseData Controller
 * @route: /api/v1/exercise/save_exercise
 * @access: public
 * @method: get
 */
export const getsaveExerciseData = expressAsyncHandler(async (req, res) => {
  const allSaveExercises = await prisma.saveExercise.findMany();
  res.status(200).json({ allSaveExercises, message: " Here is all Exercises" });
});
/**
 * @description: this exercise data Controller
 * @route: /api/v1/exercise
 * @access: public
 * @method: post
 */

export const createExerciseData = expressAsyncHandler(async (req, res) => {
  const {
    exercise,
    set,
    reps,
    holdTime,
    side,
    dayOfWeek,
    dailyFrequency,
    therapistNotes,
    saveExercise,
  } = req.body;
  // validation
  if (
    !exercise ||
    !set ||
    !reps ||
    !holdTime ||
    !side ||
    !dayOfWeek ||
    !dailyFrequency ||
    !therapistNotes
  ) {
    return res.status(400).json({ message: "All fields are Required" });
  }

  const createExercise = await prisma.Exercise.create({
    data: {
      exercise,
      set,
      reps,
      holdTime,
      side,
      dayOfWeek,
      dailyFrequency,
      therapistNotes,
    },
  });
  res
    .status(200)
    .json({ createExercise, message: "SuccessFully createExerciseData" });
});

/**
 * @description: saveExerciseData Controller
 * @route: /api/v1/exercise/save_exercise
 * @access: public
 * @method: post
 */

export const saveExerciseData = expressAsyncHandler(async (req, res) => {
  const {
    exercise,
    set,
    reps,
    holdTime,
    side,
    dayOfWeek,
    dailyFrequency,
    therapistNotes,
  } = req.body;
  // validation
  if (
    !exercise ||
    !set ||
    !reps ||
    !holdTime ||
    !side ||
    !dayOfWeek ||
    !dailyFrequency ||
    !therapistNotes
  ) {
    return res.status(400).json({ message: "All fields are Required" });
  }

  const saveExerciseData = await prisma.saveExercise.create({
    data: {
      exercise,
      set,
      reps,
      holdTime,
      side,
      dayOfWeek,
      dailyFrequency,
      therapistNotes,
    },
  });
  res
    .status(200)
    .json({ saveExerciseData, message: "Successfully saved exercise" });
});



/**
 * @description: this is delete exercise data controller
 * @route: /api/v1/exercise/id
 * @access: public
 * @method: delete
 */

export const deleteExercise = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedExercise = await prisma.Exercise.delete({
    where: {
      id,
    },
  });

  res.status(200).json({ deletedExercise, message: "Exercise deleted" });
});
/**
 * @description: this is delete exercise data controller
 * @route: /api/v1/exercise/id
 * @access: public
 * @method: delete
 */

export const deleteSaveExercise = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedSaveExercise = await prisma.saveExercise.delete({
    where: {
      id,
    },
  });

  res.status(200).json({ deletedSaveExercise, message: "SaveExercise deleted" });
});


