exports.getTags = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/:username')
    } catch (error) {
        next(error)
    }
}