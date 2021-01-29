from flask import Flask,render_template, url_for
app = Flask('app')



secret_page=''

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/secret')
def secret():
  return render_template('secret.html')

app.run(host='0.0.0.0', port=8080)