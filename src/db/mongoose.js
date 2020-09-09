const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//findById возвращает catch, если кол-во символов
// меньше/больше, чем у ObjectId
//Чтобы этого избежать, делаем проверку на условие
//до запроса findById
// if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//   return res.status(400).send({ error: 'Invalid ID!' });
// }
