# Mood Mention

Mood Mention is a web application that checks for the latest happy and sad moments on Showwcase and displays them in a user-friendly manner. It utilizes the Showwcase API to fetch data and stores it in Airtable. The Mood Mention website then fetches the data from Airtable to provide developers with insights into the community's emotions.

## Technologies Used

- Next.js
- Airtable
- OpenAI API
- Showwcase API

## Getting Started

To set up the Mood Mention project locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/sojinsamuel/mood-mention.git
   ```
2. Navigate to the project directory:
```shell
cd mood-mention
```

3. Install the dependencies:
```shell
npm install
```
4. Set up environment variables:

- Create a .env.local file in the root of the project.
- Define the following environment variables in the file:
  `NEXT_PUBLIC_AIRTABLE_API_KEY=YOUR_AIRTABLE_API_KEY`
5. Run the development server:
```shell
npm run dev
```
Open your browser and visit http://localhost:3000 to see the Mood Mention website.

## Showwcase Emotion Digger Bot
The data fetched to Airtable is retrieved using an automated Node.js bot called [Showwcase Emotion Digger](https://github.com/sojinsamuel/showwcase-emotion-digger) hosted on Amazon EC2 Instance. This bot periodically checks for the latest happy and sad moments on Showwcase. You can find the code for the bot and its functionality at the Showwcase Emotion Digger Bot repository.

The bot writes the fetched data from Showwcase API to Airtable, and the Mood Mention website fetches the data from Airtable to display it in a meaningful way.

## Reference
- [Airtable API Docs](https://airtable.com/developers/web/api/introduction)
