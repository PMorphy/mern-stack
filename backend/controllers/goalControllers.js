export const getGoals = (req, res) => {
  res.status(200).json({ message: 'Getting Goals...' });
};

export const createGoal = (req, res) => {
  res.status(201).json({ message: 'Creating Goal...' });
};

export const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updating Goal: ${req.params.id}` });
};

export const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleting Goal: ${req.params.id}` });
};
