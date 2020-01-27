import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  initialCount = 0;

  posts = [
    {
      title: "Holiday Special",
      imageUrl: "https://randomuser.me/api/portraits/med/women/16.jpg",
      username: "Letsgothere",
      content: "I saw this neet tree today"
    },
    {
      title: "Mountain Climbing",
      imageUrl: "https://randomuser.me/api/portraits/med/women/17.jpg",
      username: "TouchNot",
      content: "Plented by the rivers"
    },
    {
      title: "The Mama's Special",
      imageUrl: "https://randomuser.me/api/portraits/med/women/18.jpg",
      username: "mechanical",
      content: "The coming of the machais"
    },
    {
      title: "Nice Teaching",
      imageUrl: "https://randomuser.me/api/portraits/med/women/13.jpg",
      username: "TeachingSense",
      content: "Always a good Idea to learn to propery"
    },
    {
      title: "Back To School",
      imageUrl: "https://randomuser.me/api/portraits/med/women/14.jpg",
      username: "NoNonSense",
      content: "i cant wait to get back to school"
    },
    {
      title: "Angular's Special",
      imageUrl: "https://randomuser.me/api/portraits/med/women/15.jpg",
      username: "NoplaceLikeHome",
      content: "Angular does make so much sense "
    },

    {
      title: "Managers Eve",
      imageUrl: "https://randomuser.me/api/portraits/med/women/19.jpg",
      username: "talkyourtalk",
      content: "All that glitters are .."
    },
    {
      title: "Gradually There ",
      imageUrl: "https://randomuser.me/api/portraits/med/women/20.jpg",
      username: "lifeOfMama",
      content: "Glitters come and go.."
    },
    {
      title: "ComingToMeMe",
      imageUrl: "https://randomuser.me/api/portraits/med/women/21.jpg",
      username: "YourMindMyMind",
      content: "Waka The Waka lets go there .."
    }
  ];
}
