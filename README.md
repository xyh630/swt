# 所务通

## 项目配置
npm i 或者 npm install

## 项目运行
npm run dev

## 项目打包
npm run build

### 注意事项
拿到code之后 以此按照上面的顺序 ps: npm i => npm run dev 

#### 坑点1
由于项目所需包文件都是境外服务器提供,所以npm i 命令 将会异常卡顿. 建议： 修改npm源地址为淘宝镜像 命令为：npm set registry https://registry.npm.taobao.org/ 

### 坑点2
npm i 报错的时候，不要慌。 最简单最有效的方案是 删掉node_modules,重新执行 npm i


