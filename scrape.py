import requests
from bs4 import BeautifulSoup
import csv

url2 = 'https://news.yahoo.com/'
url='http://money.cnn.com/data/hotstocks/'
response = requests.get(url)

#print response.status_code
#print response.headers['content-type']
#print response.content

html=response.content

soup = BeautifulSoup(html)

#print soup.title
#print soup.prettify

#headlines=soup.find('h3',attrs={})
#print headlines


most_actives = soup.find('div',attrs={'id':'wsod_hotStocks'})
print most_actives
#table=most_actives.find('table',attrs={'class':'wsod_dataTable wsod_dataTableBigAlt'})

#rows=[]
#base_url='http://money.cnn.com'
#for row in table.findAll('tr'):
#	cells=[]
#	for cell in row.findAll('td'):
#		cells.append(cell.text)
#	rows.append(cells)
#	if row.find('a') is not None:
#		print base_url + row.find('a').get('href')

#outfile = open('./hotstocks.csv','w')
#writer = csv.writer(outfile)
#writer.writerows(rows)

#<h2 class="Fz(21px) Fw(b) Td(u):h" data-reactid=".ujsyvpfv28.$default.0.0.3.2.0.0.$Col1-1-WideHeroProxy.$Col1-1-WideHero.0.1.0.0">Strong quake hits Taiwan; 160 pulled alive, many trapped</h2>
#<h3 class="LineClamp(2,30px) Fz(12px) Fw(b) C(#020e65) C(#0078ff):h" data-reactid=".ujsyvpfv28.$default.0.0.3.2.0.0.$Col1-1-WideHeroProxy.$Col1-1-WideHero.1.0.1.0">Astronaut Edgar Mitchell, 6th man on moon, dies in Florida</h3>
#<h3 class="LineClamp(2,30px) Fz(12px) Fw(b) C(#020e65) C(#0078ff):h" data-reactid=".ujsyvpfv28.$default.0.0.3.2.0.0.$Col1-1-WideHeroProxy.$Col1-1-WideHero.1.1.1.0">Pope, Russian patriarch to talk about persecution of Christians</h3>
