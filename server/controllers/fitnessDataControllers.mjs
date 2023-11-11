import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

export const inputFitnessData = async (req, res) => {
  const { Patient_ID, weight, avgHR, exercisesPW, exerciseDuration, stepsPerDay } = req.body;

  try {
    const filePath = path.join(__dirname, '../Fitness_Records_Hackathon.xlsx');
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = xlsx.utils.sheet_to_json(worksheet, {header: 1});
    const headers = data[0];
    const idIndex = headers.indexOf('Patient_ID');
    const rowIndex = data.findIndex(row => row[idIndex] === Patient_ID);

    if (rowIndex === -1) {
      res.status(404).send('User not found');
      return;
    }

    const updatedRow = {
      'Weight': weight,
      'AvgHR': avgHR,
      'ExercisesPW': exercisesPW,
      'ExerciseDuration': exerciseDuration,
      'StepsPerDay': stepsPerDay
    };

    Object.keys(updatedRow).forEach(key => {
      const columnIndex = headers.indexOf(key);
      if (columnIndex !== -1) {
        data[rowIndex][columnIndex] = updatedRow[key];
      }
    });

    const updatedWorksheet = xlsx.utils.aoa_to_sheet(data);
    workbook.Sheets[workbook.SheetNames[0]] = updatedWorksheet;
    xlsx.writeFile(workbook, filePath);

    res.status(200).send('Data updated successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred');
  }
}
