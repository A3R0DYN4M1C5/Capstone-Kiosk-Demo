from newsapi import NewsApiClient
import datetime as dt
import csv

# init
newsapi = NewsApiClient(api_key='312e4cb0c72d460982f988d5cb036d57')

data = newsapi.get_top_headlines(q='Market', language='en', page_size=10)

print(data['articles'])


with open('News.csv','w',newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['TITLE','URL','IMAGE'])
    for i in data['articles']:
        writer.writerow([i['title'],i['url'],i['urlToImage']])
    



#for x,y in enumerate(articles):
#    print(f'{x}  {y["title"]}')

    
