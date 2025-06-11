# Étape 1 : base officielle Node
FROM node:18

# Étape 2 : répertoire de travail
WORKDIR /app

# Étape 3 : copier les fichiers package.json avant le reste pour utiliser le cache Docker
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste du code
COPY . .

# Étape 6 : exposer le port utilisé par ton app
EXPOSE 3000

# Étape 7 : démarrer l'application
CMD ["npm", "start"]