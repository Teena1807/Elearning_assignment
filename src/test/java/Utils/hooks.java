package Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks {
	public static WebDriver driver;
	@Before
	public void initwebdriver()
	{
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\TeenaSharma\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		 driver = new ChromeDriver();
			
	}
	
	@After
	public void exitwebdriver()
	{
		driver.quit();
		
	}

}
