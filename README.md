# [Ada Quotes API](http://ada-api.herokuapp.com/)

This is a REST-ful API that serves the favorite quotes of WDI Ada, a General Assembly Web Development Immersive course in NYC.

No keys are needed to access this API.

## Endpoints

The API has two main endpoints: `/api/quotes` and `/api/categories`. Here are some sample calls from each and their responses.

### `GET` endpoints

#### `api/quotes`

```json
{
    "message": "ok",
    "quotesData": [
        {
            "content": "The expert at anything was once a beginner.",
            "author": "Helen Hayes",
            "id": "4",
            "genre_type": "education"
        },
        {
            "content": "If you want something you never had, you have to do something you've never done!",
            "author": "Unknown",
            "id": "6",
            "genre_type": "motivational"
        },
        /* additional quotes */
    ]
}
```

#### `api/quotes/:id`

```json
{
  "message": "ok",
  "quote": {
    "content": "Hello World",
    "author": "Tim Berners-Lee",
    "id": "16",
    "genre_type": "philosophical"
  }
}
```

#### `api/categories`

```json
{
    "message": "ok",
    "categoriesData": [
        {
            "genre_type": "motivational",
            "id": "1",
            "num_quotes": "1"
        },
        {
            "genre_type": "philosophical",
            "id": "3",
            "num_quotes": "4"
        },
        {
            "genre_type": "education",
            "id": "4",
            "num_quotes": "1"
        },
        /* additional genres */
    ]
}
```

#### `api/categories/:id`

```json
{
  "message": "ok",
  "category": [
    {
      "content": "Who are we, who is each one of us, if not a combinatoria of experiences, information, books we have read, things imagined?",
      "author": "Italo Calvino",
      "genre_type": "literary",
      "id": "9"
    },
    {
      "content": "In search of the difficulty rather than in its clutch. The disquiet of him who lacks an adversary.",
      "author": "Samuel Beckett",
      "genre_type": "literary",
      "id": "11"
    }
  ]
}
```

### Other Endpoints

#### POST to `api/quotes`

Quotes can be added to the database like so:

```js
fetch('https://ada-api.herokuapp.com/api/quotes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: e.target.content.value,
    author: e.target.author.value,
    genre_id: e.target.genre_id.value,
  }),
})
```

#### PUT to `api/quotes/:id`

Modify a quote's information in the database.

```js
// where ID is the quote's ID
fetch(`https://ada-api.herokuapp.com/api/quotes/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: 'quote content here',
    author: 'quote author here',
    genre_id: 3 // the genre ID must be a number
  }),
})
```

#### DELETE to `api/quotes/:id`

Remove a quote from the database.

```js
// where ID is the quote's ID
fetch(`https://ada-api.herokuapp.com/api/quotes/${id}`, {
  method: 'DELETE',
})
```