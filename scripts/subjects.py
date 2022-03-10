from bs4 import BeautifulSoup
import re
import helpers as h

url = "https://estudios.unizar.es/estudio/asignaturas?anyo_academico=2021&estudio_id=20210148&centro_id=110&plan_id_nk=439&sort=curso"

def formatRow(item: BeautifulSoup, keys: list[str]) -> dict:
    """
    returns partially formatted information in a dictionary
    """
    data_ctag = [child for child in item.childGenerator()]
    data_ctag = list(filter(lambda x: x != '\n', data_ctag))

    l_ctag = len(data_ctag)
    l_keys = len(keys)
    data_ftag = {}  # Diccionario para el resultado
    flag = True     # Indica si se ha leido antes una url 

    if l_ctag == l_keys:
        for iter in range(0, l_ctag):
            # Guarada la url (asignatura) si hay
            if flag and data_ctag[iter].a != None:
                a = str(data_ctag[iter].a)
                url = re.findall(r"\".+\"", a)[0][1:-1]
                flag = False

            value = data_ctag[iter].get_text().replace('\n','').lstrip().rstrip() # quita saltos de linea + quita " " por la izq + quita " " por la dcha
            value = re.sub(r"\B\s+", "", value)                                   # quita espacios en mitad de las palabras
            data_ftag.update({ keys[iter] : value })
        
        if flag == False:   # flag = 0 means that was activated in the past
            data_ftag.update({ 'Url' : url })
    else:
        print(f"Error in data lenght: header:{l_keys} vs content:{l_ctag}")

    return data_ftag

def formatTable(table: BeautifulSoup, keys: list[str]) -> list[dict]:
    """
    returns a list of dictionaries from the list of rows <table>.
    """
    fdata = [formatRow(item, keys) for item in table]
    return fdata

def formatCareer(carrera):
    regex = r'>.+<'
    carrera = str(carrera[0])
    carrera = re.findall(regex, carrera)
    carrera = str(carrera[0])
    size = len(carrera) - 1
    carrera = carrera[1:size]
    return carrera

IDS = [[111,558],[144,436],[145,581],[146,430],[147,440],[148,439],[149,434],[151,435],[157,470]]

def main():
    cabecera = ['Curso','Periodo','Código','Nombre','Carácter','Créditos','Ofertada','Lim plazas', 'Idioma']
    carrera = ""
    f = open('archivoSalidaCarreras.csv','w',encoding="UTF-8")
    for idcarrera in IDS:
        html = h.getHTML(f"https://estudios.unizar.es/estudio/asignaturas?anyo_academico=2021&estudio_id=20210{idcarrera[0]}&centro_id=110&plan_id_nk={idcarrera[1]}&sort=curso")
        data = h.getContent(html, 'tr[data-key]')
        carrera = h.getCareer(html)
        carrera = formatCareer(carrera)
        data_f = formatTable(data , cabecera)
        for dat in data_f:
            dat.update({'Carrera':carrera})
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