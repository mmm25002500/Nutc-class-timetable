# 國立臺中科技大學 課表 <br >NUTC Class TimeTable

## 介紹 Introduction
因為中科大的課表很難用，也很難看，因此透過爬蟲的方式，將中科大課表擷取下來，並使用 python flask 製作成 api，用前端去呼叫。

這個專案可以在網頁上選擇您的班級，就會顯示出課表。

## 執行 Run
您必須要擁有的環境:
- Python 3.9
- Python flask)(pip)

### 後端
**Step 1.** 執行以下的 Bash 命令:
```bash
git clone https://github.com/mmm25002500/Nutc-class-timetable
cd Nutc-class-timetable
python3.9 -m pip install -r requirement.txt
python3.9 api.py
```
**STEP2.** 更改IP/Port: <br>
更改: ``run.py``，將app.run()的IP/port更改至您的IP/Port，除非您想使用 Proxy，那麼即是 "0.0.0.0"。

**STEP3.** 更改檔案SSL: <br>
更改: ``run.py``，將``ssl_contex=('certificate.pem', 'private.pem')``更改為您的SSL憑證位置，除非使用 Proxy 內建SSL，否則請使用SSL。

### 前端
檔案在 [www/index.html](www/index.html)，使用 vue.js 製作，預設呼叫 [https://api.tershi.com](https://api.tershi.com)。

## 貢獻 Contribute
如果您想貢獻本專案，可以將本專案 fork 至本地增加/刪除/修改 程式碼，並提交 Pull Requests，我會用心查看您的程式碼，如果對專案有幫助，我將會Merge，或是提供更多建議或詢問。

## 開發 Developer
資工一1 [夏特稀](https://tershi.com)開發。