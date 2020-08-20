# Welcome to the backend!

This app is the back end portion to a full-stack application, which can be found [here](https://frontend-personality-quiz.herokuapp.com/)

## How to run locally

_You cannot run this locally as is, must change application properties to something like below to utilize a local h2 database_

- `spring.datasource.driver-class-name=org.h2.Driver`
- `spring.datasource.url= jdbc:h2:mem:testdb`
- `spring.h2.console.enabled=true`
- `spring.datasource.platform=h2`
- `spring.jpa.hibernate.ddl-auto = update`

## How I converted my H2 Database and Deployed to Heroku

- First, I needed to utilize a Postgres database so that integration with Heroku is easy, so I added the dependency to my pom.xml
- `<dependency>`
- `<groupId>org.postgresql</groupId>`
- `<artifactId>postgresql</artifactId>`
- `<scope>runtime</scope> </dependency>`

- Second, I converted my application properties to use Postgres and variables which we will configure later (looks something like below, can look at my application properties in github if youre confused on what each thing is doing)

- `spring.datasource.url=${SPRING_DATA_URL}`
- `spring.datasource.username=${SPRING_DATA_USERNAME}`
- `spring.datasource.password=${SPRING_DATA_PASSWORD}`
- `spring.jpa.show-sql=false`
- `spring.jpa.generate-ddl=true`
- `spring.jpa.hibernate.ddl-auto=${SPRING_JPA_HIBERNATE_DDL-AUTO}`
- `server.port=${PORT:8080}`
- `spring.datasource.platform=${SPRING_JPA_DATABASE-PLATFORM}`
- `spring.datasource.driver-class-name=org.postgresql.Driver` - `spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect`

- Third, I actually made the Heroku app, chose GitHub as deployment, and linked the appropriate repo

- Fourth, I went to _Manage App_, then _Resources_, and added _Heroku Postgres_ as an add-on

- Fifth, I went under _Settings_ and clicked _Reveal Config Vars_. Here is where you fill in what your application properties needs. The variables that need configured are `SPRING_DATA_URL`, `SPRING_DATA_USERNAME`, `SPRING_DATA_PASSWORD`, `SPRING_JPA_HIBERNATE_DDL-AUTO`, and `SPRING_JPA_DATABASE-PLATFORM`. The information that corresponds with these variables can be found by clicking on the _Resources_ tab, click on Heroku Postgres, then on the _Settings_ tab, and then click the "View Credentials" button. This is where I found the values to the variables that need to be set. _Note_ The spring datasource url will look like this, you have to put your host, port, and database info in it: `SPRING_DATASOURCE_URL=jdbc:postgresql://<Host>:<Port>/<Database>`

- The tutorial I used is [here](https://blog.codecentric.de/en/2015/10/deploying-spring-boot-applications-to-heroku/)

- Finally, anywhere you are calling localhost you need to call your actual website deployed with Heroku

- _Note: I had to change my java version to 1.8 in my pom.xml file to get my build to successfully build, keep an eye out for that!_

#### Thats it!
