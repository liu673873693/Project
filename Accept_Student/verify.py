import requests
import base64
import rsa
import os
from lxml import etree
class VerifyPassword:
    def __init__(self, username, password):
        self.username = username
        self.password = password.encode()
    def verify(self):
        key_url = "http://www.zfjw.xupt.edu.cn/jwglxt/xtgl/login_getPublicKey.html"
        url = "http://www.zfjw.xupt.edu.cn/jwglxt/xtgl/login_slogin.html"
        url_data = "http://www.zfjw.xupt.edu.cn/jwglxt/xtgl/index_cxYhxxIndex.html?xt=jw&localeKey=zh_CN&_=1566015621601&gnmkdm=index&su=" + self.password.decode()
        headers = {
            "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
        }
        session = requests.Session()
        public_key = session.get(key_url).json()
        modulus = base64.b64decode(public_key["modulus"])
        exponent = base64.b64decode(public_key["exponent"])
        true_key = rsa.PublicKey(int.from_bytes(modulus, "big"), int.from_bytes(exponent, "big"))
        rsa_password = base64.b64encode(rsa.encrypt(self.password, true_key))
        form_data = {
            "yhm": self.username,
            "mm": rsa_password,
            "mm": rsa_password
        }
        try:
            responce = session.post(url, data=form_data, headers=headers)
            responce = session.get(url_data, headers=headers)
            user_data = etree.HTML(responce.text)
            self.name = user_data.xpath("/html/body/div/div/h4/text()")[0]
            self.major = user_data.xpath("/html/body/div/div/p/text()")[0]
            return True
        except:
            return False
if __name__ =="__main__":
    A = VerifyPassword("04182123", "liu13201934057")
    print(A.name,A.major)
