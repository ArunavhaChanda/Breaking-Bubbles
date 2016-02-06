from collections import defaultdict
import nltk

news = open("./news.txt",'r')
sports = open("./sports.txt",'r')
politics = open("./politics.txt",'r')
business = open("./business.txt",'r')
science = open("./science.txt",'r')

skip=0

news_dict = defaultdict(int)
sports_dict = defaultdict(int)
politics_dict = defaultdict(int)
business_dict = defaultdict(int)
science_dict = defaultdict(int)

line = sports.readline().decode('utf-8')
while(line):
	tokens=nltk.word_tokenize(line)
	tagged=nltk.pos_tag(tokens)
	for pair in tagged:
		if(skip):
			skip=0
			continue
		word=pair[0].rstrip()
		if(pair[1][0]=='N'):
			if(tagged.index(pair)+1<len(tagged)):
				next_word=tagged[tagged.index(pair)+1][0]
				if((ord(word[0])>=65 and ord(word[0])<=90) and (ord(next_word[0])>=65 and ord(next_word[0])<=90)):
					word=word+" "+next_word
					skip=1
			sports_dict[word]+=1
	line = sports.readline().decode('utf-8')
sports_dict = sorted(sports_dict.items(), key=lambda sports_dict:-1*sports_dict[1])
print sports_dict[0:5]

line = politics.readline().decode('utf-8')
while(line):
	tokens=nltk.word_tokenize(line)
	tagged=nltk.pos_tag(tokens)
	for pair in tagged:
		if(skip):
			skip=0
			continue
		word=pair[0].rstrip()
		if(pair[1][0]=='N'):
			if(tagged.index(pair)+1<len(tagged)):
				next_word=tagged[tagged.index(pair)+1][0]
				if ((ord(word[0])>=65 and ord(word[0])<=90) and (ord(next_word[0])>=65 and ord(next_word[0])<=90)):
					word=word+" "+next_word
					skip=1
			politics_dict[word]+=1
	line = news.readline().decode('utf-8')
politics_dict = sorted(politics_dict.items(), key=lambda politics_dict:-1*politics_dict[1])
print politics_dict[0:5]

line = business.readline().decode('utf-8')
while(line):
	tokens=nltk.word_tokenize(line)
	tagged=nltk.pos_tag(tokens)
	for pair in tagged:
		if(skip):
			skip=0
			continue
		word=pair[0].rstrip()
		if(pair[1][0]=='N'):
			if(tagged.index(pair)+1<len(tagged)):
				next_word=tagged[tagged.index(pair)+1][0]
				if ((ord(word[0])>=65 and ord(word[0])<=90) and (ord(next_word[0])>=65 and ord(next_word[0])<=90)):
					word=word+" "+next_word
					skip=1
			business_dict[word]+=1
	line = business.readline().decode('utf-8')
business_dict = sorted(business_dict.items(), key=lambda business_dict:-1*business_dict[1])
print business_dict[0:5]

line = science.readline().decode('utf-8')
while(line):
	tokens=nltk.word_tokenize(line)
	tagged=nltk.pos_tag(tokens)
	for pair in tagged:
		if(skip):
			skip=0
			continue
		word=pair[0].rstrip()
		if(pair[1][0]=='N'):
			if(tagged.index(pair)+1<len(tagged)):
				next_word=tagged[tagged.index(pair)+1][0]
				if ((ord(word[0])>=65 and ord(word[0])<=90) and (ord(next_word[0])>=65 and ord(next_word[0])<=90)):
					word=word+" "+next_word
					skip=1
			science_dict[word]+=1
	line = science.readline().decode('utf-8')
science_dict = sorted(science_dict.items(), key=lambda science_dict:-1*science_dict[1])
print science_dict[0:5]

outfile=open("sports.csv",'w')
for i in range(5):
	outfile.write(sports_dict[i][0]+"\n")

outfile=open("politics.csv",'w')
for i in range(5):
	outfile.write(politics_dict[i][0]+"\n")

outfile=open("business.csv",'w')
for i in range(5):
	outfile.write(business_dict[i][0]+"\n")

outfile=open("science.csv",'w')
for i in range(5):
	outfile.write(science_dict[i][0]+"\n")


outfile.close()
sports.close()
science.close()
business.close()
politics.close()