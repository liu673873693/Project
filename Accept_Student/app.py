from flask import Flask, render_template,url_for, request,flash, session
from set import db
import config
from models import User
import verify
from verify import VerifyPassword
app = Flask(__name__)
app.config.from_object(config)
db.init_app(app)#定义一个数据库对象
@app.route("/index/",methods=["GET","POST"])
@app.route("/",methods=["GET","POST"])
def index():
    if request.method == "POST":
        tnumber = request.form.get("number")
        tpassword = request.form.get("password")
        user_number = User.query.filter_by(number=tnumber).first()
        if user_number and user_number.query.filter_by(password =tpassword).first():#数据库中已经存储了数据
            return "登陆成功"
        else:
            A = VerifyPassword(tnumber,tpassword)
            if A.verify():
                user = User(number = tnumber,password=tpassword, name=A.name,major=A.major)
                db.session.add(user)
                db.session.commit()
                return "登陆成功"
            else:
                flash("账号密码错误,请重新输入")
    return render_template("index.html")

@app.route("/login/",methods=["GET","POST"])
def login():
    if request.method=="POST":
        username = request.form.get("username")
        password = request.form.get("password")
        major = request.form.get("major")
        number = request.form.get("number")
        user = User(password=password,name=username,major=major,number=number)
        db.session.add(user)
        db.session.commit()
        return "注册成功"
    else:
        return render_template("login.html")


if __name__ == '__main__':
    app.run(host="")
