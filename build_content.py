"""Genera el catálogo descargable y el JavaScript a partir de projects.json."""
import json
from pathlib import Path
import shutil
import argparse
parser=argparse.ArgumentParser()
parser.add_argument('--output-dir',type=Path)
args=parser.parse_args()
ROOT=Path(__file__).resolve().parent
projects=json.loads((ROOT/'projects.json').read_text(encoding='utf-8'))
template=(ROOT/'script.template.js').read_text(encoding='utf-8')
(ROOT/'script.js').write_text(template.replace('__PROJECT_DATA__',json.dumps(projects,ensure_ascii=False,indent=2)),encoding='utf-8')
lines=['# Proyectos de Enzo Aldhair Fuentes Apaza','','Catálogo profesional · Actualizado el 24 de octubre de 2026','','GitHub: https://github.com/enzoaldhairfuentesapaza','', 'Proyectos comerciales, institucionales y académicos de desarrollo de software, inteligencia artificial y sistemas.','']
for i,p in enumerate(projects,1):
    lines += [f'## {i}. {p["name"]}', '', p['description'], '', p['detail'], '',f'**Áreas:** {", ".join(p["areas"])}.',f'**Lenguajes:** {", ".join(p["languages"])}.',f'**Tecnologías o conceptos:** {", ".join(p["stack"])}.',f'**Tipo:** {p["type"]}. **Estado:** {p["status"]}.',f'**Repositorio:** https://github.com/enzoaldhairfuentesapaza/{p["repo"]}']
    if p.get('demo'):lines += [f'**Aplicación:** {p["demo"]}']
    if p.get('note'):lines += [f'**Nota:** {p["note"]}']
    lines += ['']
catalogue='\n'.join(lines)
(ROOT/'assets/Proyectos_Enzo_Fuentes.md').write_text(catalogue,encoding='utf-8')
if args.output_dir:
    out=args.output_dir
    out.mkdir(exist_ok=True)
    (out/'Proyectos_Enzo_Fuentes.md').write_text(catalogue,encoding='utf-8')
    shutil.copy2(out/'CV_Enzo_Fuentes_Profesional.pdf',ROOT/'assets/CV_Enzo_Fuentes_Profesional.pdf')
