# Java with Cucumber and Selenium WebDriver #

Task 1: Post a message in Facebook Page

Task 2: Write a Review in Wallethub Page 

# Requirements #

```console
Java 8 JDK

maven
```

To install all dependencies, run 

```console
$ mvn clean install
```

# To Run Task #

```console
$ mvn test
```

To Run a particular feature with the tag name:

```console
mvn test -Dcucumber.options="--tags @facebook_page"
```

