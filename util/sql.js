// node中使用回调的api大部分都是异步的，这里对操作数据库动作做下封装。
async function RunSQL (sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = RunSQL;
