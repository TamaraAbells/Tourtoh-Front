import jwt from "jsonwebtoken";
import {
    belongsTo,
  createServer,
  hasMany,
  Model,
  Response,
  Serializer
} from "miragejs";
import Asset from "../Assets";

createServer({
  serializers: {
    user: Serializer.extend({
      embed: true,
      root: true,
      include: ["post"],
    }),
    post: Serializer.extend({
      embed: true,
      root: true,
      include: ["user"],
    }),
  },
  models: {
    movie: Model,

    user: Model.extend({
      post: hasMany(),
    }),
    post: Model.extend({
      user: belongsTo(),
    }),
  },

  routes() {
    this.namespace = "api"
    this.urlPrefix = process.env.REACT_APP_BASE_URL

    this.post("/users/login", function (schema, request) {
      return new Promise((resolve, reject) => {
        const requestAttrs = JSON.parse(request.requestBody);
        const {users} = this.serialize(schema.users.all());
  
        const user = users.filter((user) => (
          user.email === requestAttrs.email &&
          user.password === requestAttrs.password
        ));
        if (user.length) {
          const token = jwt.sign(JSON.stringify(user), process.env.REACT_APP_JWT_SECRET);
          return resolve(new Response(200, request.requestHeaders, { user, token }));
        }
        return reject(new Response(404, request.requestHeaders, 'No records found!'));
      })
    });
    this.post("/users/signup", function (schema, request) {
      const requestAttrs = JSON.parse(request.requestBody);
      const token = jwt.sign(JSON.stringify(requestAttrs), process.env.REACT_APP_JWT_SECRET);
        console.log("ATTRS", requestAttrs)
      
      return schema.users.create(requestAttrs);
    });

    this.get("/users", function (schema, request) {
      return new Promise((resolve, reject) => {
        const requestAttrs = JSON.parse(request.requestBody);
        const {users} = this.serialize(schema.users.all());
  
        if (users) {
          return resolve(new Response(200, request.requestHeaders, users));
        }
        return reject(new Response(404, request.requestHeaders, 'No records found!'));
      })
    });
    this.get("/user/:id", function (schema, request) {
      return new Promise((resolve, reject) => {
        let data = null;
        let id = request.params.id;
        const isNumber = isNaN(id);

        if (!isNumber) {
          data = this.serialize(schema.users.find(id));
        }
        else {
          data = this.serialize(schema.users.findBy({ username: id }));
        }
        if (data) {
          return resolve(new Response(200, request.requestHeaders, data.user));
        }
        return reject(new Response(404, request.requestHeaders, 'No records found!'));
      })
    });
    
    // this.get("/user/:username", function (schema, request) {
    //   return new Promise((resolve, reject) => {
    //     let id = request.params.username;
    //     const {user} = this.serialize(schema.users.find(username));
        
    //     if (user) {
    //       return resolve(new Response(200, request.requestHeaders, user));
    //     }
    //     return reject(new Response(404, request.requestHeaders, 'No records found!'));
    //   })
    // });

    this.get("/posts", function (schema, request) {
      return new Promise((resolve, reject) => {
        const requestAttrs = JSON.parse(request.requestBody);
        const {posts} = this.serialize(schema.posts.all());
  
        if (posts) {
          return resolve(new Response(200, request.requestHeaders, posts));
        }
        return reject(new Response(400, request.requestHeaders, 'No records found!'));
      })
    });
    this.post("/posts", function (schema, request) {
      return new Promise((resolve, reject) => {
        let attrs = JSON.parse(request.requestBody);
  
        if (attrs) return resolve(schema.posts.create(1, attrs));
        return reject(new Response(404, request.requestHeaders, 'Something went wrong!'));
      })
    });

    this.get("/movies", (schema, request) => {
      return schema.movies.all();
    });

    this.get("/movies/:id", (schema, request) => {
      let id = request.params.id;
    
      return schema.movies.find(id);
    });
      
    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      console.log("ATTRS", attrs)
      
      return schema.movies.create(attrs);
    });
      
    this.patch("/movies/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.movies.find(id);
      
      return movie.update(newAttrs);
    });
      
    this.delete("/movies/:id", (schema, request) => {
      let id = request.params.id;
      
      return schema.movies.find(id).destroy();
    });
  },
  seeds(server) {
    server.create("user", {
      email: 'traveller@tourtoh.com',
      username: 'Travel_girl_AO',
      password: 'tourtoh',
      firstName: 'Alice',
      lastName: 'Oleson',
      location:' California, USA',
      phone: '+1-202-555-0100',
      avatar: Asset.Image.Avatar1,
      cover: Asset.Image.ProfileBanner,
      role: 'traveller',
      pastTravels: [
        {place: 'Canada', url: 'http://localhost:3000/static/media/past1.92703ec5.png'},
        {place: 'Switzerland', url: 'http://localhost:3000/static/media/past1.92703ec5.png'},
        {place: 'Greenland', url: 'http://localhost:3000/static/media/past2.c5e5fb99.png'},
      ],
      post: [
        server.create('post', {
          text: 'I believe in evolution. But I also believe, when I hike the Grand Canyon and see it at sunset, that the hand of God is there also.',
          date: new Date,
          image: Asset.Image.Rectangle1,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_clicks'
        }),
        server.create('post', {
          text: 'I believe I hike the Grand Canyon and see it at sunset, that the hand of God is there also',
          date: new Date,
          image: Asset.Image.Rectangle2,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_posts'
        }),
        server.create('post', {
          text: 'I believe I hike the Grand Canyon and see it at sunset, that the hand of God is there also',
          date: new Date,
          image: Asset.Image.Rectangle3,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_clicks'
        }),
        server.create('post', {
          text: 'I believe that the hand of God is there also',
          date: new Date,
          image: Asset.Image.Rectangle4,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_clicks'
        })
      ]
    });
    server.create("user", {
      email: 'guider@tourtoh.com',
      username: 'Guide_girl_AO',
      password: 'tourtoh',
      firstName: 'Tourtoh',
      lastName: 'Guide',
      excerpt: "Let's find your adventure with me.",
      location:' New Jersey, USA',
      phone: '+1-202-555-0100',
      avatar: Asset.Image.Avatar,
      cover: Asset.Image.Cover,
      role: 'guide',
      experience: '2 Years 5 Months',
      hourlyRate: '49 $ Per Hour',
      languages: [
        { language: 'Spanish', fluency: 'Fluent' },
        { language: 'French', fluency: 'Fluent' }
      ],
      pastTravels: [
        {place: 'Canada', url: 'http://localhost:3000/static/media/past1.92703ec5.png'},
        {place: 'Switzerland', url: 'http://localhost:3000/static/media/past1.92703ec5.png'},
        {place: 'Greenland', url: 'http://localhost:3000/static/media/past2.c5e5fb99.png'},
      ],
      post: [
        server.create('post', {
          text: 'I believe in evolution. But I also believe, when I hike the Grand Canyon and see it at sunset, that the hand of God is there also.',
          date: new Date,
          image: Asset.Image.Rectangle4,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_posts'
        }),
        server.create('post', {
          text: 'I believe I hike the Grand Canyon and see it at sunset, that the hand of God is there also',
          image: Asset.Image.Pic4,
          date: new Date,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_clicks'
        }),
        server.create('post', {
          text: 'I believe I hike the Grand Canyon and see it at sunset, that the hand of God is there also',
          date: new Date,
          image: Asset.Image.Pic2,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_posts'
        }),
        server.create('post', {
          text: 'I believe that the hand of God is there also',
          date: new Date,
          image: Asset.Image.Pic3,
          love: 20,
          lovedBy:[1],
          share: 300,
          direction: 18,
          location: 'Grand Canyon',
          type: 'travel_posts'
        })
      ]
    });
  },
});