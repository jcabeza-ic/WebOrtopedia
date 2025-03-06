import os

# Cambia esta ruta a la de tu proyecto
project_path = r"C:\Users\Pepe\Desktop\Nivel4Final\src"
print(project_path)
output_file = "proyecto_completos.txt"

with open(output_file, "w", encoding="utf-8") as output:
    for root, dirs, files in os.walk(project_path):
        output.write(f"\n{root}\n")
        output.write("=" * len(root) + "\n")
        for file in files:
            file_path = os.path.join(root, file)
            output.write(f"\n### {file} ###\n")
            with open(file_path, "r", encoding="utf-8") as f:
                output.write(f.read())
                output.write("\n\n")

print(f"Contenido del proyecto exportado a {output_file}")