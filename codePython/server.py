from flask import Flask, request, jsonify, send_file
import io
import matplotlib.pyplot as plt

app = Flask(__name__)
tab = []

@app.route('/image', methods=['POST'])
def handle_data():
    if 'file' not in request.files:
        return jsonify({'error:', 'tsy tonga le sary'})
    data = request.files['file']
    image = plt.imread(io.BytesIO(data.read()), format='jpeg')
    
    # Debut de traitement de l'image
    #---------------------------------------------------
    image = image[:, :, 0]

    #---------------------------------------------------
    # Fin de traitement de l'image
    
    # sauvegarder l'image
    path_image = './temp_image.jpg'
    plt.imsave(path_image, image)
    
    print("sary: ", io.BytesIO(data.read()))
    return jsonify({"message": "Data reçu !", "data": 5})
    
    
    
    
# @app.route('/get-image', methods=['GET'])
# def get_image():
#     path_image = './temp_image.jpg'
#     if os.path.exists(path_image):
#         return send_file(path_image, mimetype='image/jpeg')
#     else:
#         return jsonify({'error: ', 'Image non trouver'})

    

# @app.route('/dataUsers', method=['POST'])
# def dataUsers():
    
# inscription
@app.route('/data', methods=['GET', 'POST'])
def authentification():
    if request.method == 'POST':
        data = request.json
        return jsonify({"message":"Données reçu !", "data": data})
    elif request.method == 'GET':
        return jsonify(data)
    else:
        return jsonify({"message": "Send some data"})
    
    
    
    
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    
    
    
    