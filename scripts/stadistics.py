from bs4 import BeautifulSoup
import re
import helpers as h

url = "https://estudios.unizar.es/informe/indicadores?estudio_id=148&anyo=2020"

def formatRow(item: BeautifulSoup, keys: list[str]) -> dict:
    """
    returns partially formatted information in a dictionary
    """
    data_ctag = [child for child in item.childGenerator()]
    data_ctag = list(filter(lambda x: x != '\n', data_ctag))

    l_ctag = len(data_ctag)
    l_keys = len(keys)
    data_ftag = {}

    if l_ctag == l_keys:
        for iter in range(0, len(data_ctag)):
            value = data_ctag[iter].get_text().replace('\n','').lstrip().rstrip() # quita saltos de linea + quita " " por la izq + quita " " por la dcha
            value = re.sub(r"\B\s+", "", value)                                   # quita espacios en mitad de las palabras
            data_ftag.update({ keys[iter] : value })
    else:
        pass
        # print(f"Error in data lenght: header:{l_keys} vs content:{l_ctag}")

    return data_ftag

def formatTable(table: BeautifulSoup, keys: list[str]) -> list[dict]:
    """
    returns a list of dictionaries from the list of rows <table>.
    """
    fdata = [formatRow(item, keys) for item in table]
    fdata = list(filter(lambda x: x != {}, fdata))
    return fdata

years = [2020,2019,2018,2017]
IDS = [111,144,145,146,147,148,149,151,157]

def main():
    cabecera = ['Curso','Cód As','Asignatura','Mat','Rec Equi Conv','Apro','Susp','No pre', 'Tasa éxito','Tasa rend']
    f = open('archivoSalida.csv','w',encoding="UTF-8")
    for year in years:
        for idcarrera in IDS:
            html = h.getHTML(f"https://estudios.unizar.es/informe/indicadores?estudio_id={idcarrera}&anyo={year}")
            data = h.getContent(html, 'tbody > tr')
            data_f = formatTable(data , cabecera)

        
            for fila in data_f:
                for campo in fila:
                    f.write(fila[campo]+";")
                f.write("\n")
    f.close()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("leaving...")