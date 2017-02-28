var express = require('express');
var mysql = require('mysql')
var router = express.Router();
var pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'wcgloveyou521',
	database: 'wcg',
	port: 3306,

})

router.get('/lints', function(jin, chu) {
	console.log('chenggggg....')
	if(jin.session.names) {
		var quan = jin.param('uid')
		var n1s = jin.session.mid
		console.log('.................' + n1s + '>>>>>>')
		pool.getConnection(function(a, b) {
			var sql = 'select * from lint where n1=?';
			b.query(sql, [n1s], function(err, result) {
				if(err) {
					console.log("ERRor:" + err.message);
					return;
				}
				b.release();
				console.log("innerggetUserByName");
				chu.send(result)
			})
		})
	} else {
		chu.send('没登录')
	}

})
router.post('/li', function(jin, chu) {
	var data = {
		da: '',
		da2: ''
	}
	var n1 = Number(jin.body['n1'])
	var n2 = Number(jin.body['n2'])
	var da = n1 * n2
	console.log(da)
	console.log(n1 + '王刚chenggggg....' + n2)
	pool.getConnection(function(a, b) {
		var sql = 'select * from lint';
		b.query(sql, function(err, result) {
			if(err) {
				console.log("ERRor:" + err.message);
				return;
			}
			b.release();
			console.log("innerggetUserByName");
			data.da = result.length
			pool.getConnection(function(c, c) {
				var sql = 'select * from lint limit ?,?';
				c.query(sql, [da, n2], function(err, resultd) {
					if(err) {
						console.log("ERRor:" + err.message);
						return;
					}
					c.release();
					console.log("innerggetUserByName");
					data.da2 = resultd

					chu.send(data)
				})
			})

		})
	})

})
router.get('/CustomerDelete', function(jin, chu) {
		console.log('chenggggg....')
		var quans = Number(jin.param('uid'))
		pool.getConnection(function(a, b) {
			var sql = 'delete from lint where uid = ?';
			b.query(sql, [quans], function(err, result) {
				if(err) {
					console.log("ERRor:" + err.message);
					chu.send({
						mad: 2
					})
					return;
				}
				b.release();
				console.log("innerggetUserByName");
				console.log('我:' + result)
				chu.send({
					mad: 1,
					wode: result
				})
			})
		})
	})
	//详情
router.get('/xiang', function(jin, chu) {
		console.log('chenggggg....')
		var quans = Number(jin.param('uid'))
		pool.getConnection(function(a, b) {
			var sql = 'select * from lint where uid = ?';
			b.query(sql, [quans], function(err, result) {
				if(err) {
					console.log("ERRor:" + err.message);
					chu.send({
						mad: 2
					})
					return;
				}
				b.release();
				console.log("innerggetUserByName");
				console.log('我:' + result)
				chu.send(result)
			})
		})
	})
	//修改
router.post('/xiu', function(jin, chu) {
	console.log('chenggggg....')
	var s1 = Number(jin.body['uid'])
	var s2 = jin.body['email']
	var s3 = jin.body['username']
	var s4 = jin.body['password']
	var s5 = jin.body['n1']
	var s6 = jin.body['mumber']

	pool.getConnection(function(a, b) {
		var sql = 'update lint set email=?,username=?,password=?,n1=?,mumber=? where uid = ?';
		b.query(sql, [s2, s3, s4, s5, s6, s1], function(err, result) {
			if(err) {
				console.log("ERRor:" + err.message);
				chu.send({
					mad: 2
				})
				return;
			}
			b.release();
			console.log("innerggetUserByName");
			console.log('我:' + result)
				//			if(result.affectedRows>0){
			chu.send(result)
				//			}else{

			//}77y7

		})
	})
})
router.get('/naes', function(jin, chu) {
	console.log("我的")
		//	chu.send({mad:2})
	pool.getConnection(function(a, b) {
		var sql = 'select * from names'
		b.query(sql, function(err, result) {
			if(err) {
				console.log("你猜:" + err.message);
				chu.send({
					mad: 2
				})
				return;
			}
			b.release();
			console.log('我:' + result)
			chu.send(result)
		})
	})
})

router.get('/naesd', function(jin, chu) {
	console.log("我的")
		//	chu.send({mad:2})
	pool.getConnection(function(a, b) {
		var sql = 'select * from na'
		b.query(sql, function(err, result) {
			if(err) {
				console.log("你猜:" + err.message);
				chu.send({
					mad: 2
				})
				return;
			}
			b.release();
			console.log('我:' + result)
			chu.send(result)
		})
	})
})
module.exports = router