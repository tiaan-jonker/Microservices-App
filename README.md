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

## Moderation Flow
1. Comment Service dispatches 'CommentsCreated' to event bus (status is 'pending')
2. Moderation Service and Query Service receives the event. From a UX perspective the client can now see that the comment status which is now 'pending'
3. After comment is moderated the Moderation Service dispatches 'CommentModerated' which is received by Comments Service
4. Only comments service is responsible for the business logic. The final dispatch is 'CommentUpdated which is received by Query Service with the final status 