const fs = require('fs')
const babel = require('@babel/core')

fs.readFile('./element.jsx', (e, data) => {

    const code = data.toString('utf-8')
    // 转换jsx文件
    const result = babel.transformSync(code, {
        plugins: ['@babel/plugin-transform-react-jsx']
    })
    fs.writeFile('./element-transform.js', result.code, () => {
        console.log('写入成功！')
    })
})