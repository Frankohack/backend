const MedicalRecord = require('../schemas/MedicalRecord')

async function createMedicalRecord(animalId, visitDate, description) {
  const record = await MedicalRecord.create({animalId, visitDate, description});
  return record;
};

async function getMedicalRecords(animalId) {
  const records = await MedicalRecord.find({animalId});
  return records;
}

module.exports = {createMedicalRecord, getMedicalRecords};
