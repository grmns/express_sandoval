# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 13000 en el contenedor
EXPOSE 13000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["node", "app.js"]
