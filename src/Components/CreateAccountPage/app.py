from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import json

app = Flask(__name__)
CORS(app)

# Define an empty list to store user data
user_data = []

# Rot13 encryption function
def rot13_encrypt(text):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            base = ord('a') if char.islower() else ord('A')
            encrypted_char = chr((ord(char) - base + 13) % 26 + base)
            encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

@app.route('/', methods=['GET'])
def root():
    return jsonify({"message": "Welcome to the Flask backend!"})

@app.route('/api/store_user_data', methods=['POST'])
def store_user_data():
    data = request.get_json()

    # Check if the required fields (username, privateKey, secretPhrase, publicId) are present
    if 'username' not in data or 'privateKey' not in data or 'secretPhrase' not in data or 'publicId' not in data:
        return jsonify({"message": "Invalid user data. Please provide username, privateKey, secretPhrase, and publicId."}), 400

    # Encrypt the private key before storing it
    data['privateKey'] = rot13_encrypt(data['privateKey'])

    user_data.append(data)  # Append the user data as a dictionary to the list

    with open('usersData.json', 'w') as file:
        json.dump(user_data, file)  # Convert and write user_data to the file as JSON

    return jsonify({"message": "User data stored successfully"})


if __name__ == '__main__':
    app.run(debug=True)
