import requests
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='./build', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder,'index.html')

# returns url of random Unsplash image when endpoint is hit
@app.route('/image')
def get_random_image():
    url = 'https://source.unsplash.com/random/800x600'
    r = requests.get(url)
    return {'random_image_url': r.url}
