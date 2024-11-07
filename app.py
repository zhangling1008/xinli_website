from flask import Flask, request, jsonify
import csv
import os

app = Flask(__name__)

# Path to the CSV file
CSV_FILE = 'survey_data.csv'

# Ensure the CSV file exists with headers
if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Name', 'Age', 'Email'])

@app.route('/submit', methods=['POST'])
def submit_survey():
    data = request.get_json()
    
    # Append the data to the CSV file
    with open(CSV_FILE, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([data['name'], data['age'], data['email']])
    
    return jsonify({'message': 'Survey submitted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)