import express from "express";
import { getExercise,createExerciseData,deleteExercise,saveExerciseData,getsaveExerciseData, deleteSaveExercise } from "../controllers/ExerciseController/ExerciseController.js";



// init route

const router = express.Router();


// create router

router.get( "/", getExercise)
router.post( "/", createExerciseData)
router.post( "/save_exercise", saveExerciseData)
router.get( "/save_exercise", getsaveExerciseData)
router.delete( "/save_exercise/:id", deleteSaveExercise)
router.delete( "/:id", deleteExercise)



// export router

export default router