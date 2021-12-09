const express       = require('express');
const indexRouter   = require('./routes');
const {sequelize}   = require('./models');
//set server
const app = express();
app.set('port', process.env.PORT || 3000);

sequelize.sync({force: false})
    .then(() => {
        console.log('데이터페이스 연결 성공');
    })
    .catch((err) =>{
        console.error(error);
    });
//body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//connect router
app.use('/', indexRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
