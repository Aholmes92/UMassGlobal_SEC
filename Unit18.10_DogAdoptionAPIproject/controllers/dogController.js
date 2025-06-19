const Dog = require('../models/Dog');

// Register a new dog
exports.registerDog = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description required' });
  }
  try {
    const dog = await Dog.create({
      name,
      description,
      owner: req.user._id,
    });
    res.status(201).json(dog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Adopt a dog
exports.adoptDog = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  try {
    const dog = await Dog.findById(id).populate('owner', 'username');
    if (!dog) return res.status(404).json({ message: 'Dog not found' });

    if (dog.adoptedBy) {
      return res.status(409).json({ message: 'Dog already adopted' });
    }
    if (dog.owner.equals(req.user._id)) {
      return res.status(403).json({ message: 'You cannot adopt your own dog' });
    }

    dog.adoptedBy = req.user._id;
    await dog.save();

    res.status(200).json({
      message: `Thank you for adopting ${dog.name}! We'll share your note with ${dog.owner.username}.`,
      note: message || '',
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove dog
exports.removeDog = async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await Dog.findById(id);
    if (!dog) return res.status(404).json({ message: 'Dog not found' });

    if (!dog.owner.equals(req.user._id)) {
      return res.status(403).json({ message: 'You can only remove your own dogs' });
    }
    if (dog.adoptedBy) {
      return res.status(400).json({ message: 'Cannot remove an adopted dog' });
    }
    await dog.remove();
    res.status(200).json({ message: 'Dog removed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// List registered dogs
exports.listRegisteredDogs = async (req, res) => {
  const { status, page = 1, limit = 10 } = req.query;
  const filter = { owner: req.user._id };
  if (status === 'adopted') filter.adoptedBy = { $ne: null };
  if (status === 'available') filter.adoptedBy = null;

  try {
    const dogs = await Dog.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(dogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// List adopted dogs
exports.listAdoptedDogs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const dogs = await Dog.find({ adoptedBy: req.user._id })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(dogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};