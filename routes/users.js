var express = require('express');

var mysql = require('mysql')
var router = express.Router();

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'wcgloveyou521',
	database:'newxianmu',
	port:3306
});

//根据用户名获取用户信息
function getUserByName(uname,callback){
	pool.getConnection(function(err,connection){
		var sql = 'select * from zhuce where username = ?';
		connection.query(sql,[uname],function(err,result){
			if(err){
				console.log("ERRor:"+err.message);
				return;
			}
			connection.release();
			console.log("innerggetUserByName");
			callback(err,result);
		})
	})
}
function getUserByName3(uname,callback){
	pool.getConnection(function(err,connection){
		var sql = 'select * from zhuce where email = ?';
		connection.query(sql,[uname],function(err,result){
			if(err){
				console.log("ERRor:"+err.message);
				return;
			}
			connection.release();
			console.log("innerggetUserByName");
			callback(err,result);
		})
	})
}
//注册
function getUserByName2(uname,pws,eml,callback){
	pool.getConnection(function(err,connection){
		var sql = 'insert into zhuce(username,password,email) values(?,?,?)';
		connection.query(sql,[uname,pws,eml],function(err,result){
			if(err){
				console.log("ERRor:"+err.message);
				return;
			}
			connection.release();
			console.log("innerggetUserByName");
			callback(err,result);
		})
	})
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login',function(jin,chu){
	console.log('chenggggg....')
	chu.send({name:'天才小浣熊1'})
})
router.post('/login',function(rea,rep){
	var name = rea.body['username'];
	var pwd = rea.body['password'];
	getUserByName(name,function(err,results){
//		console.log(results[0].username)
		if(results == '' || results == null){
			console.log('用户名不存在')
			rep.send({num:3})
		}else if(pwd == results[0].password){
			rea.session.names = name
			rea.session.mid = results[0].uid
			console.log('>>>>>>>>>>'+rea.session.mid)
			rep.send({num:1,uid:results[0].uid})
			console.log('成功')
		}else{
			rep.send({num:2})
			console.log('密码错误')
		}
		
	})
})
router.post('/register',function(rea,rep){
	var name = rea.body['username'];
	var pwd = rea.body['password'];
	var eml = rea.body['email'];
	console.log('123123123')
	getUserByName(name,function(err,results){
//		console.log(results)
		if(results == '' || results == null){
			console.log('wu')
			getUserByName3(eml,function(err2,resultss){
				if(resultss == '' || resultss == null){
					getUserByName2(name,pwd,eml,function(err1,results1){
		    if(results1.insertId > 0){
			rep.send({num:'成功',uid:results1.insertId})
		    }
	     })
				}else{
					console.log('you')
			       rep.send({num:'邮箱已存在'})
				}
			})
			
		}else{
			console.log('you')
			rep.send({num:'账户已存在'})
		}
	})
	
})
module.exports = router;
