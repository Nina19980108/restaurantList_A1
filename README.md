# 我的餐廳清單

一個使用 Node.js + Express 打造的餐廳美食網站，並透過 mongodb 資料庫取得資料。
可以註冊帳號，並使用帳號登入。
可以在首頁看到所有餐廳與它們的簡單資料，並選擇不同的排序方式。可以點擊觀看餐廳的詳細資訊。可以自行新增餐廳，或是修改餐廳內容。

## 專案畫面

首頁
![image](https://github.com/Nina19980108/restaurantList_A1/blob/master/publc/img/home.png)

登入頁
![image](https://github.com/Nina19980108/restaurantList_A1/blob/master/publc/img/login.png)

註冊頁
![image](https://github.com/Nina19980108/restaurantList_A1/blob/master/publc/img/register.png)

編輯特定餐廳
![image](https://github.com/Nina19980108/restaurantList_A1/blob/master/publc/img/edit.png)

查看詳細餐廳資料
![image](https://github.com/Nina19980108/restaurantList_A1/blob/master/publc/img/detail.png)

## Features - 產品功能

1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以瀏覽一家餐廳的詳細資訊。
3. 使用者可以修改一家餐廳的詳細資訊。
4. 使用者可以新增一家餐廳。
5. 使用者可以在首頁依不同方式排序餐廳。
6. 使用者可以註冊新帳號。
7. 使用者可以透過註冊的帳號密碼登入。

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Nina19980108/restaurantList_A1.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd restaurantList_A1
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在 Terminal 輸入 nodemon app.js 指令
```

5. 匯入種子檔案

```
在 Terminal 輸入 npm run seed 指令

```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
Mongodb is connected!
done
done
```

6. 啟動伺服器，執行 app.js 檔案

```
nodemon app.js
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Restaurant list is on http://localhost:3000
```

8. 可使用種子資料的帳號密碼登入

```
信箱：rot@email.com
密碼：rot

信箱：root@email.com
密碼：root
```

## Contributor - 專案開發人員

> [Nina Liu](https://github.com/Nina19980108)
