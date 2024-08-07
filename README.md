# Ejemplo de Arquitectura Hexagonal en Node.js usando TS

  [![My Skills](https://skillicons.dev/icons?i=ts,nodejs,git,npm,prisma,sqlite,vercel&theme=dark)]

Este es un ejemplo sencillo de Arquitectura Hexagonal en Node.js usando TypeScript.

- TypeScript
- Node.js
- npm
- Sqlite
- Prisma
- Vercel

## ¿Qué es la Arquitectura Hexagonal?

La Arquitectura Hexagonal es un patrón arquitectónico que nos ayuda a crear aplicaciones más independientes del mundo externo.
También se conoce como Arquitectura de Puertos y Adaptadores o Arquitectura de Cebolla.

## Cómo ejecutar la aplicación

Requisitos previos:

- Node.js nodejs
- npm npm
- prisma => `npm install -g prisma` prisma

1. Ejecuta `npm install`

2. Copiar y ajustar las variables env.example a .env

3. cd a la carpeta `src/infrastructure/db`

    ```bash
    cd src/infrastructure/db

    npx prisma migrate dev --name init
    ```

4. Ejecuta `npm run start` para lanzar la aplicación

5. Ejecuta `npm run test` para lanzar los tests

## casos de uso

Esta es la lista de los casos de uso que soporta la aplicación, estos casos de uso básicos serán cambiados en el futuro para ser más realistas.

### Crear usuario

  ```text
  method: POST
  URL: /api/v1/user/signup
  ```

Para crear un usuario se requieren los siguientes datos:

- name
- email
- password

  ```json
  {
    "name": "John Doe",
    "email": "john@test.com",
    "password": "123456"
  }
  ```

### Autenticar usuario

  ```text
  method: POST
  URL: /api/v1/user/signin
  ```

Para loguear un usuario se requieren los siguientes datos:

- email
- password

  ```json
  {
    "email": "john@test.com",
    "password": "123456"
  }
  ```

========================================================

## Apartir de este las peticiones requieren autenticación con Bearer Token de la respuesta del Caso de Crear usuario

========================================================

### Crear un post

Para crear un post se requieren los siguientes datos:

- title
- body

  ```json
  {
    "title": "My first post",
    "body": "<h1>Hello World!</h1><p>This is my first post</p>",
  }
  ```

### Fork from github fraybabak

<https://github.com/fraybabak/hexagonal_example_nodejs>
