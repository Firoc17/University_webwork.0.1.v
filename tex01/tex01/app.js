const express = require('express');
const mockjs = require('mockjs');
const app = express();

app.get('/', (req, res) => {
    const str = mockjs.mock(
        {
            "object|2-4": {
                "110000": "北京市",
                "120000": "天津市",
                "130000": "河北省",
                "140000": "山西省",
            },
            "list": {
                "list": '@paragraph()'
            }
        }

    )
    res.send({
        status: 200,
        message: "查询成功",
        date: str
    })
})

app.listen(8080, () => {
    console.log("http://localhost:8080");
})
