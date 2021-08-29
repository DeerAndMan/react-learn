import Mock from 'mockjs'

// 响应拦截
Mock.setup({
    // timeout: '2000-6000'
})

// 发送数据 
Mock.mock('/api/testGet', 'get', () => {
    let mockData = {
        "ret":0,
        data: []
    }
    for (let i = 0; i < 500; i++) {
        mockData["count"] = i
        mockData.data.push(
            Mock.mock({
                "mtime": "@datetime",//随机生成日期时间
                "score|1-800": 800,//随机生成1-800的数字
                "rank|1-100":  100,//随机生成1-100的数字
                "stars|1-5": 5,//随机生成1-5的数字
                "nickname": "@cname",//随机生成中文名字
            })
        )
    }
    return mockData
})