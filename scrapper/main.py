import requests
from bs4 import BeautifulSoup
import json


if __name__ == "__main__":

    response = requests.get(url="https://abu.edu.kz/en/71-doktorantam").text
    soup = BeautifulSoup(response, 'lxml')

    headers = soup.find_all('div', class_="content-dropdown__head")
    bodys = soup.find_all('div', class_="content-dropdown__body")
    titles = soup.find_all('h3')
    print(titles)

    result = []
       
    for i in range(len(headers)):
        print(headers[i])
        bodys_a_list = bodys[i].find_all('a')
        items = []
        for body_a in bodys_a_list:
            item = {
                "title": body_a.text.strip(),
                "url": body_a.get('href').replace('/uploads', 'https://abu.edu.kz/uploads')
            }
            items.append(item)
        result.append({"year" : headers[i].text, "documents" :items})
    final= []

    for i in range(len(titles)):
        start = i * 3
        end = start + 3
        group = {
            "name": titles[i].text.strip(),
            "children":result[start:end]
        }
        final.append(group)
    
    # Сохраняем как JSON
    with open('./links.json', 'w', encoding='utf-8') as f:
        json.dump(final, f, ensure_ascii=False, indent=4)
