package com.win.personality_quiz;

import com.win.personality_quiz.model.Quiz;
import com.win.personality_quiz.repository.QuizRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuizApp implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(QuizApp.class, args);
	}

	@Autowired
	private QuizRepo quizRepo;

	@Override
	public void run(String... args) throws Exception {
		this.quizRepo.save(new Quiz("What Is Your Preferred Halloween Costume?", "A. None, I'm lame", "B. Skeleton",
				"C. George of the Jungle", "D. A group costume with friends", "E. Cow"));
		this.quizRepo.save(new Quiz("What Quality Is Most Attractive to You?", "A.Sense of humor", "B. Intelligence",
				"C. Thoughtfulness", "D. Great communication skills", "E. People who are unapologetically themselves"));
		this.quizRepo.save(new Quiz("What Is Your Karaoke Song?", "A. Mr. Brightside - The Killers",
				"B. Total Eclipse of The Heart - Bonie Tyler", "C. Summer Lovin' - Grease", "D. Fat Lip - Sum 41",
				"E. Cheeseburger in Paradise - Jimmy Buffett"));
		this.quizRepo.save(new Quiz("How Do You Celebrate Your Birthday?", "A. Dinner out", "B. Eating",
				"C. A vacation with my significant other", "D. A party with close friends and family",
				"E. With close friends"));
		this.quizRepo.save(new Quiz("What Is Your Biggest Pet Peeve?", "A. Lack of empathy",
				"B. Not following through with something", "C. Intentional ignorance",
				"D. Dirty dishes piling up in the sink",
				"E. When I catch myself not being brave, honest, or courageous"));
		this.quizRepo.save(
				new Quiz("If You Could Live Anywhere, Where Would It Be?", "A. Pacific Northwest", "B. Manhattan, NY",
						"C.Charlotte, NC", "D. Lima, Peru", "E. I'm happy with where I am and what I have"));
		this.quizRepo.save(new Quiz("What could you eat A LOT of?", "A. Potato chips", "B. Watermelon", "C. Pizza",
				"D. Chicken Pad Thai", "E. Ice cream"));
		this.quizRepo.save(new Quiz("Pick a Fictional Hangout Spot", "A. Hogwarts, Harry Potter",
				"B. Jellyfish Fields, Sponge Bob", "C. MacLaren's Pub, HIMYM", "D. The Honker Burger, Doug",
				"E. Anywhere with the Parks and Rec group"));
		this.quizRepo.save(new Quiz("Danger's Afoot. No Time To Wait For Backup. What Do You Do?", "A. Call a friend",
				"B. Pick a hiding spot and observe the situation from a distance", "C. Evacuate!",
				"D. Grab a first-aid-kit, cellphone, and a knife. You never know what kind of danger you're walking into",
				"E. Assess the situation and discern the most appropriate reaction"));
		this.quizRepo.save(new Quiz("You Can Only Use One Social Network For the Rest of Your Life! What Is It?",
				"A. Twitter", "B. Stack Overflow", "C. Reddit", "D. The one I create on my own",
				"E. I don't really care about social media"));
		this.quizRepo.save(new Quiz("A Tornado Is Coming, Now What?", "A. Grab my kid, hide in bathtub",
				"B. Look up what to do during a tornado ", "C. Stay away from the windows",
				"D. Grab the animals, gallons of water, a cell phone, flashlight, and go to the safest place in the house",
				"E. Find safety and call my loved ones to make sure they're okay"));
		this.quizRepo.save(new Quiz("What Would Make You Happiest On a Work Day?", "A. Go Home",
				"B. Working on a project I feel passionate about", "C. Completing a project", "D. Cute animal pictures",
				"E. A team effort resulting in a positive outcome"));
		this.quizRepo.save(new Quiz("What's Your Motto to Live By?", "A. Work to live, don't live to work",
				"B. Do the best with what you have", "C. Keep on keeping on", "D. The only constant is change",
				"E. Help others without expecting to receive"));

	}

}