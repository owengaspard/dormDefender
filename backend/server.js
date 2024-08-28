// Backend API to handle requests to and from MongoDB

// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
// eslint-disable-next-line no-undef
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('ENTER_MONGO_URL_HERE', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  
// data schema
const formDataSchema = new mongoose.Schema({
    roomNumber: Number,
    dormName: String,
    idNumber: Number,
    password: String,
    securityQuestion: String,
  });

  const Room = mongoose.model('FormData', formDataSchema);

// POST API to handle registering a room
app.post('/api/register', async (req, res) => {
    const newRoom = new Room({ roomNumber: req.body.roomNumber, 
        dormName: req.body.dormName, idNumber: req.body.idNumber, 
        password: req.body.password, securityQuestion: req.body.securityQuestion });

    try {
        await newRoom.save();
        res.status(201).json({ message: 'Room registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// GET API to fetch room details
app.get('/api/room/:idNumber', async (req, res) => {
    const { idNumber } = req.params;

    try {
        const room = await Room.findOne({ idNumber });
        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.listen(5001, () => console.log('Server listening on port 5001'));
