# Microservices-App

A very basic app to learn the fundamentals of microservices

## Posts Service

| Path   | Method |      Body       |           Function |
| :----- | :----: | :-------------: | -----------------: |
| /posts |  POST  | {title: string} |  Create a new post |
| /posts |  GET   |        -        | Retrieve all posts |

## Comments Service

| Path                | Method |       Body        |                                                Function |
| :------------------ | :----: | :---------------: | ------------------------------------------------------: |
| /posts/:id/comments |  POST  | {content: string} |          Create a comment associated with given post ID |
| /posts/:id/comments |  GET   |         -         | Retrieve all comments associated with the given post ID |
