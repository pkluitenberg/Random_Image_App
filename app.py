import requests
from flask import Flask

app = Flask(__name__)

# image function
@app.route('/image')
def get_random_image():
    url = 'https://source.unsplash.com/random/800x600'
    r = requests.get(url)
    return {'random_image_url': r.url}
