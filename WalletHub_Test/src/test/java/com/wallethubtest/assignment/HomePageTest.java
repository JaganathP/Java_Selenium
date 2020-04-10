package com.wallethubtest.assignment;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/com/wallethubtest/assignment/FBHomePage.feature"},
        strict = false, plugin = {"pretty",
        "json:target/cucumber_json_reports/FBHomePage.json",
        "html:target/FBHomePage-html"},
        glue = {"com.wallethubtest.assignment.infrastructure.driver",
                "com.wallethubtest.assignment.homepage"})
public class HomePageTest {
}
