const sequelize = require('./config/database');

sequelize.sync({ force: false })
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));
