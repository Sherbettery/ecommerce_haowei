import json

with open('merchant.json','r', encoding='utf-8') as file:
    # file.read() turns data into strings
    # data=file.read()
    
    # json.load() turns data into dict
    data=json.load(file)

for item in data['product']:
    print(item['name'])

# print(type(data))