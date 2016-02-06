import requests
import csv

URL_all = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Ftopstories%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
URL_sports = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Fsports%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
URL_business = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Fbusiness%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
URL_science = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Fscience%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
URL_politics = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Fpolitics%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='

response = requests.get(URL_all)
data = response.json()
outfile = open('./news.txt','w')

for result in data['query']['results']['item']:
	line=''+result['title']
	outfile.write(line.encode('utf8'))
	outfile.write("\n")
outfile.close()


response = requests.get(URL_sports)
data = response.json()
outfile = open('./sports.txt','w')

for result in data['query']['results']['item']:
	line=''+result['title']
	outfile.write(line.encode('utf8'))
	outfile.write("\n")
outfile.close()


response = requests.get(URL_business)
data = response.json()
outfile = open('./business.txt','w')

for result in data['query']['results']['item']:
	line=''+result['title']
	outfile.write(line.encode('utf8'))
	outfile.write("\n")
outfile.close()


response = requests.get(URL_science)
data = response.json()
outfile = open('./science.txt','w')

for result in data['query']['results']['item']:
	line=''+result['title']
	outfile.write(line.encode('utf8'))
	outfile.write("\n")
outfile.close()


response = requests.get(URL_politics)
data = response.json()
outfile = open('./politics.txt','w')

for result in data['query']['results']['item']:
	line=''+result['title']
	outfile.write(line.encode('utf8'))
	outfile.write("\n")
outfile.close()

