export interface CommentI {
    id: string;
    author: string;
    content: string;
    timestamp: string;
    likes: number;
    profilePic: string;
    replies: CommentI[];
  }
  
  

export const commentsData :CommentI[] = [
    {
      "id": "c1",
      "author": "John Doe",
      "content": "This is a great video!",
      "timestamp": "2024-06-22T12:34:56Z",
      "likes": 15,
      "profilePic": "https://randomuser.me/api/portraits/men/1.jpg",
      "replies": [
        {
          "id": "c1r1",
          "author": "Jane Smith",
          "content": "I agree!",
          "timestamp": "2024-06-22T13:00:00Z",
          "likes": 5,
          "profilePic": "https://randomuser.me/api/portraits/women/1.jpg",
          "replies": [
            {
              "id": "c1r1r1",
              "author": "Bob Brown",
              "content": "Absolutely!",
              "timestamp": "2024-06-22T13:30:00Z",
              "likes": 3,
              "profilePic": "https://randomuser.me/api/portraits/men/2.jpg",
              "replies": []
            }
          ]
        },
        {
          "id": "c1r2",
          "author": "Alice Green",
          "content": "Thanks for sharing!",
          "timestamp": "2024-06-22T13:15:00Z",
          "likes": 4,
          "profilePic": "https://randomuser.me/api/portraits/women/2.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c2",
      "author": "Alice Johnson",
      "content": "I learned a lot from this.",
      "timestamp": "2024-06-22T14:00:00Z",
      "likes": 20,
      "profilePic": "https://randomuser.me/api/portraits/women/3.jpg",
      "replies": [
        {
          "id": "c2r1",
          "author": "Eve Adams",
          "content": "Me too, it was very informative.",
          "timestamp": "2024-06-22T14:20:00Z",
          "likes": 7,
          "profilePic": "https://randomuser.me/api/portraits/women/4.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c3",
      "author": "Charlie Williams",
      "content": "Could you explain the part about...",
      "timestamp": "2024-06-22T15:00:00Z",
      "likes": 10,
      "profilePic": "https://randomuser.me/api/portraits/men/3.jpg",
      "replies": [
        {
          "id": "c3r1",
          "author": "David Lee",
          "content": "Sure, what do you need help with?",
          "timestamp": "2024-06-22T15:30:00Z",
          "likes": 2,
          "profilePic": "https://randomuser.me/api/portraits/men/4.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c4",
      "author": "Emily Clark",
      "content": "Amazing content!",
      "timestamp": "2024-06-22T16:00:00Z",
      "likes": 18,
      "profilePic": "https://randomuser.me/api/portraits/women/5.jpg",
      "replies": [
        {
          "id": "c4r1",
          "author": "Frank Miller",
          "content": "Indeed, very well done.",
          "timestamp": "2024-06-22T16:30:00Z",
          "likes": 6,
          "profilePic": "https://randomuser.me/api/portraits/men/5.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c5",
      "author": "George Hall",
      "content": "Could use more examples.",
      "timestamp": "2024-06-22T17:00:00Z",
      "likes": 8,
      "profilePic": "https://randomuser.me/api/portraits/men/6.jpg",
      "replies": [
        {
          "id": "c5r1",
          "author": "Hannah Scott",
          "content": "I agree, more examples would be great.",
          "timestamp": "2024-06-22T17:20:00Z",
          "likes": 3,
          "profilePic": "https://randomuser.me/api/portraits/women/6.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c6",
      "author": "Irene Moore",
      "content": "Well explained!",
      "timestamp": "2024-06-22T18:00:00Z",
      "likes": 12,
      "profilePic": "https://randomuser.me/api/portraits/women/7.jpg",
      "replies": []
    },
    {
      "id": "c7",
      "author": "Jack White",
      "content": "Very useful, thank you.",
      "timestamp": "2024-06-22T19:00:00Z",
      "likes": 9,
      "profilePic": "https://randomuser.me/api/portraits/men/7.jpg",
      "replies": [
        {
          "id": "c7r1",
          "author": "Karen Black",
          "content": "You're welcome!",
          "timestamp": "2024-06-22T19:30:00Z",
          "likes": 1,
          "profilePic": "https://randomuser.me/api/portraits/women/8.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c8",
      "author": "Laura Brown",
      "content": "Can you do a video on XYZ?",
      "timestamp": "2024-06-22T20:00:00Z",
      "likes": 5,
      "profilePic": "https://randomuser.me/api/portraits/women/9.jpg",
      "replies": [
        {
          "id": "c8r1",
          "author": "Mark Davis",
          "content": "That's a good idea!",
          "timestamp": "2024-06-22T20:30:00Z",
          "likes": 2,
          "profilePic": "https://randomuser.me/api/portraits/men/8.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c9",
      "author": "Nancy Allen",
      "content": "I didn't understand the part about...",
      "timestamp": "2024-06-22T21:00:00Z",
      "likes": 6,
      "profilePic": "https://randomuser.me/api/portraits/women/10.jpg",
      "replies": [
        {
          "id": "c9r1",
          "author": "Oscar Hill",
          "content": "What specifically didn't you get?",
          "timestamp": "2024-06-22T21:30:00Z",
          "likes": 1,
          "profilePic": "https://randomuser.me/api/portraits/men/9.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c10",
      "author": "Patricia Kim",
      "content": "Thanks for this video!",
      "timestamp": "2024-06-22T22:00:00Z",
      "likes": 14,
      "profilePic": "https://randomuser.me/api/portraits/women/11.jpg",
      "replies": [
        {
          "id": "c10r1",
          "author": "Quentin Wright",
          "content": "My pleasure!",
          "timestamp": "2024-06-22T22:30:00Z",
          "likes": 3,
          "profilePic": "https://randomuser.me/api/portraits/men/10.jpg",
          "replies": []
        }
      ]
    },
    {
      "id": "c11",
      "author": "Robert Young",
      "content": "Great work!",
      "timestamp": "2024-06-22T23:00:00Z",
      "likes": 11,
      "profilePic": "https://randomuser.me/api/portraits/men/11.jpg",
      "replies": []
    },
    {
      "id": "c12",
      "author": "Samantha Taylor",
      "content": "Can you cover ABC next?",
      "timestamp": "2024-06-23T00:00:00Z",
      "likes": 4,
      "profilePic": "https://randomuser.me/api/portraits/women/12.jpg",
      "replies": []
    },
    {
      "id": "c13",
      "author": "Thomas Anderson",
      "content": "Very informative.",
      "timestamp": "2024-06-23T01:00:00Z",
      "likes": 16,
      "profilePic": "https://randomuser.me/api/portraits/men/12.jpg",
      "replies": []
    },
    {
      "id": "c14",
      "author": "Uma Evans",
      "content": "Loved the explanation!",
      "timestamp": "2024-06-23T02:00:00Z",
      "likes": 13,
      "profilePic": "https://randomuser.me/api/portraits/women/13.jpg",
      "replies": []
    },
    {
      "id": "c15",
      "author": "Victor Harris",
      "content": "More videos like this, please.",
      "timestamp": "2024-06-23T03:00:00Z",
      "likes": 7,
      "profilePic": "https://randomuser.me/api/portraits/men/13.jpg",
      "replies": []
    },
    {
      "id": "c16",
      "author": "Wendy Johnson",
      "content": "I have a question about...",
      "timestamp": "2024-06-23T04:00:00Z",
      "likes": 5,
      "profilePic": "https://randomuser.me/api/portraits/women/14.jpg",
      "replies": []
    },
    {
      "id": "c17",
      "author": "Xavier Martin",
      "content": "Nice video!",
      "timestamp": "2024-06-23T05:00:00Z",
      "likes": 10,
      "profilePic": "https://randomuser.me/api/portraits/men/14.jpg",
      "replies": []
    },
    {
      "id": "c18",
      "author": "Yvonne King",
      "content": "Could you do a tutorial on...",
      "timestamp": "2024-06-23T06:00:00Z",
      "likes": 4,
      "profilePic": "https://randomuser.me/api/portraits/women/15.jpg",
      "replies": []
    },
    {
      "id": "c19",
      "author": "Zachary White",
      "content": "Awesome, thank you!",
      "timestamp": "2024-06-23T07:00:00Z",
      "likes": 9,
      "profilePic": "https://randomuser.me/api/portraits/men/15.jpg",
      "replies": []
    },
    {
      "id": "c20",
      "author": "Alyssa Scott",
      "content": "I didn't quite get the last part.",
      "timestamp": "2024-06-23T08:00:00Z",
      "likes": 6,
      "profilePic": "https://randomuser.me/api/portraits/women/16.jpg",
      "replies": [
        {
          "id": "c20r1",
          "author": "Brian Lee",
          "content": "What part are you referring to?",
          "timestamp": "2024-06-23T08:30:00Z",
          "likes": 2,
          "profilePic": "https://randomuser.me/api/portraits/men/16.jpg",
          "replies": []
        }
      ]
    }
  ]
  
  