package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= "src/test/java/features/Registration.feature",
	glue= {"StepDefinition","Utils"	},
	
	dryRun = false,
	monochrome=true,
	plugin = {"pretty","html:target/reports","json:target/reports/myreport.json","junit:target/reports/report2.xml"}
	
)
public class testrunner {

}