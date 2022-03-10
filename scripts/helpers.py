from bs4 import BeautifulSoup
import requests

def getHTML(url: str) -> str:
    """
    Collects the content of the <url> and returns it in string format
    """
    try:
        html = requests.get(url).text
    except Exception:
        print("Error downloading the html from: " + url)

    return html

def getContent(html, filter) -> BeautifulSoup:
    """ 
    Reads the data from the file <name> and obtains the table of contents obtained by the filter <filter>.
    """
    soup = BeautifulSoup(html, 'html.parser')
    tag = soup.select(filter)

    return tag

def saveContent(content: str, name='index.html') -> None:
    """ 
    Write the <content> in a <name> file.
    * for testing
    """
    try:
        with open(name,'w',encoding='utf-8') as f:
            for line in content: f.write(line)       
                
    except Exception:
        print("Error saving the file: " + name)

def readContent(filter, name='index.html') -> BeautifulSoup:
    """ 
    Reads the data from the file <name> and obtains the table of contents obtained by the filter <filter>.
    """
    try:
        with open(name,'r',encoding='utf-8') as f:
            html = f.read()

        soup = BeautifulSoup(html, 'html.parser')
        tag = soup.select(filter)

    except Exception:
        print("Error reading the file: " + name)

    return tag

def getCareer(html) -> BeautifulSoup:
    soup = BeautifulSoup(html, 'html.parser')
    tag = soup.find_all('h1')
    return tag