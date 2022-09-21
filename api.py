# import json
import requests
import json
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from flask_sslify import SSLify

app = Flask(__name__)
CORS(app)

@app.route('/getTable', methods=['GET'])
def getTable():
    
    id = request.args.get('id')
    if id == None:
        return 'Error: Please give me id parameter<3 <br> 錯誤: 請給我id喔~ 揪咪'
        
    else:
        url = 'https://aisap.nutc.edu.tw/public/day/by_class.aspx?clsno=' + id
        data = requests.get(url).text
        soup = BeautifulSoup(data, 'html.parser')
        table = soup.find('table', id="schedule_tab")
        rows = table.find_all('tr')
        
        temp = []
        data = []
        for row in rows:
            cols = row.find_all('td')
            temp = []
            key = 0
            for element in cols:
                key += 1
    #            print(element.text)
                temp_text = element.text.replace('｜', '~') \
                                        .replace(' / ', '<br>')
                if key != 1 and key !=2:
                    if '、' in temp_text:
                        txt = temp_text[:len(temp_text)-15] + '<br>' + temp_text[len(temp_text)-15:]
                        temp.append(txt)
                    elif '星期' not in temp_text:
                        txt = temp_text[:len(temp_text)-11] + '<br>' + temp_text[len(temp_text)-11:]
                        temp.append(txt)
                    else:
                        temp.append(temp_text)
    #                temp.append(temp_text[len(temp_text)-11:])
                else:
                    temp.append(temp_text)
            data.append(temp)
        data[0][0] = '節次'
        data[0][1] = '時間'
        return data


@app.route('/getClassRoom', methods=['GET'])
def getClassRoom():
    f = open('school.json')
    data = json.load(f)
    return data
    
# @app.route('/test_api2/', methods=['GET'])
# def test_api2():
#     return json.dumps(message='Hello, API2')


if __name__ == '__main__':

    # You should not put your ssl cert file be
#    app.run(host='0.0.0.0', port=8080, debug=False, ssl_context=('certificate.pem', 'private.pem'))
    app.run(host='0.0.0.0', port=8080, debug=False)
