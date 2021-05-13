package StepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import Utils.hooks;

public class stepdefinition {
	WebDriver driver= hooks.driver;
	
	@Given("^User is on Elearning Home page$")
	public void user_is_on_Elearning_Home_page() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	  driver.get("http://elearningm1.upskills.in/");
		Thread.sleep(30);
	}

	@When("^click on Signup Link$")
	public void click_on_Signup_Link() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.linkText("Sign up!")).click();;
	   Thread.sleep(300);
	}

	@When("^Registration page should appear$")
	public void registration_page_should_appear()  {
		
	    // Write code here that turns the phrase above into concrete actions
	    String title= "My Organization - My education - Registration";
	    String verifyTitle=driver.getTitle();
	    System.out.println(verifyTitle);
	    Assert.assertEquals(verifyTitle, title);
	}

	@When("^User Enters Mandatory Feild values \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" in step$")
	public void user_Enters_Mandatory_Feild_values_in_step(String fname, String lname, String email, String uname, String pass, String cpass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(fname);
		   Thread.sleep(300);   
		   driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(lname);
			Thread.sleep(300);
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(email);
			Thread.sleep(300); 
			driver.findElement(By.xpath("//input[@name='username']")).sendKeys(uname);
			Thread.sleep(300);
			driver.findElement(By.xpath("//input[@name='pass1']")).sendKeys(pass);
			Thread.sleep(300); 
			driver.findElement(By.xpath("//input[@name='pass2']")).sendKeys(cpass);
			Thread.sleep(300); 
	}

	@When("^User Clicks on Register$")
	public void user_Clicks_on_Register() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='registration_submit']")).click();
		Thread.sleep(3000);   
	}
	@When("^User registration is successful \"([^\"]*)\",\"([^\"]*)\"$")
	public void user_registration_is_successful(String fname, String lname) {
	    // Write code here that turns the phrase above into concrete actions
		
		 if(driver.getPageSource().contains(fname)){
			 System.out.println("Registration Successful");
			 driver.manage().window().maximize();
		 }
		 else
		 {
			 System.out.println("Registration Failed");
		 }
	}

	@When("^User click on Compose Link$")
	public void user_click_on_Compose_Link() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.linkText("Homepage")).click();
	   Thread.sleep(3000);
	
		   driver.findElement(By.linkText("Compose")).click();
	  
	   
	   Thread.sleep(300);
	   
	 
	}
	@When("^User Enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" in step$")
	public void user_Enter_in_step(String sendto, String sub, String message) throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@type='search']")).sendKeys(sendto);
		   Thread.sleep(3000);
			  WebElement list1= driver.findElement(By.xpath("//*[@id='select2-compose_message_users-results']"));
			  List<WebElement> options = list1.findElements(By.tagName("li"));
			   for (WebElement option : options)
			   {
				   System.out.println(option.getText());
			       if (option.getText().equals("a c (aaa)"))
			       {
			          	    	   option.click(); // click the desired option
			           break;
			       }
			   }
			 
			   Thread.sleep(3000);
			   
		driver.findElement(By.xpath("//*[@name='title']")).sendKeys(sub);
		WebElement iframe = driver.findElement(By.cssSelector(".cke_wysiwyg_frame"));;

        driver.switchTo().frame(iframe);

        Thread.sleep(3000);
		 
		driver.findElement(By.xpath("/html/body")).sendKeys("HELLO");
		driver.switchTo().defaultContent();
		
		
	   
	}

	@When("^User Clicks on Send Message$")
	public void user_Clicks_on_Send_Message() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='compose_message_compose']")).click();
		  Thread.sleep(3000);
	}

	@Then("^I verify the message is sent \"([^\"]*)\"$")
	public void i_verify_the_message_is_sent(String sendto) {
		 if(driver.getPageSource().contains(sendto)){
			 System.out.println("Mail sent Successful");
			
		 }
		 else
		 {
			 System.out.println("Mail not sent ");
		 }
		

		// Write code here that turns the phrase above into concrete actions
	   
	}

}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


