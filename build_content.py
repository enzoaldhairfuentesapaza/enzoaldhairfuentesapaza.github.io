"""Genera el catálogo descargable y el JavaScript a partir de projects.json."""
import json
from pathlib import Path
import shutil
import argparse
parser=argparse.ArgumentParser()
parser.add_argument('--output-dir',type=Path)
args=parser.parse_args()
ROOT=Path(__file__).resolve().parent
projects=json.loads((ROOT/'projects.json').read_text())
template=(ROOT/'script.template.js').read_text()
(ROOT/'script.js').write_text(template.replace('__PROJECT_DATA__',json.dumps(projects,ensure_ascii=False,indent=2)))
lines=['# Proyectos de Enzo Aldhair Fuentes Apaza','','Catálogo profesional · Actualizado el 11 de octubre de 2026','','GitHub: https://github.com/enzoaldhairfuentesapaza','', 'Los estados de despliegue indicados corresponden a la información de Enzo. Las descripciones se contrastaron con los README y, cuando fue necesario, con archivos de los repositorios.','']
for i,p in enumerate(projects,1):
    lines += [f'## {i}. {p["name"]}', '', p['description'], '', p['detail'], '',f'**Áreas:** {", ".join(p["areas"])}.',f'**Lenguajes:** {", ".join(p["languages"])}.',f'**Tecnologías o conceptos:** {", ".join(p["stack"])}.',f'**Tipo:** {p["type"]}. **Estado:** {p["status"]}.',f'**Repositorio:** https://github.com/enzoaldhairfuentesapaza/{p["repo"]}']
    if p.get('demo'):lines += [f'**Aplicación:** {p["demo"]}']
    if p.get('note'):lines += [f'**Nota:** {p["note"]}']
    lines += ['']
lines += ['## Información pendiente para completar el perfil','','- Semestre actual y fecha estimada de egreso.','- Fechas de desarrollo y contribuciones individuales en proyectos en equipo.','- Enlaces públicos de CEDHI y de la app Flutter.','- LinkedIn, si existe, y correo de contacto preferido.','- Capturas, videos y muestras de pintura o escritura, si se quieren añadir más adelante.','','## Fuentes del perfil','','- CV original y constancias escolares proporcionados por Enzo.','- Carta de recomendación de septiembre de 2026: utilizada como respaldo del perfil académico; no se publica.','- Selección oficial PhawAI 2025: https://www.phawai.org/phawai-tarecda-25/becarios','- Repositorios enlazados en cada proyecto.','']
catalogue='\n'.join(lines)
(ROOT/'assets/Proyectos_Enzo_Fuentes.md').write_text(catalogue)
if args.output_dir:
    out=args.output_dir
    out.mkdir(exist_ok=True)
    (out/'Proyectos_Enzo_Fuentes.md').write_text(catalogue)
    shutil.copy2(out/'CV_Enzo_Fuentes_Profesional.pdf',ROOT/'assets/CV_Enzo_Fuentes_Profesional.pdf')
