# spooky react

:jack_o_lantern: It's time for Halloween kids! And you know what that means!

It means you're gonna be developing a nice React application.

I am a friendly skeleton that helps you start with building React applications. Unlike the other skeletons already out there (did I mention the skeleton war is real and will come for us all) I don't make any weird assumptions about things like preprocessors, components you want to use and folder structure, other than:

    - It's the future and you want to use ES6/ES2015 and JSX so Babel is included
    - If you're gonna do that, you also want a bundler so you can use ES6 modules
    - Typing `gulp` after every save is tedious, so you want a watcher

Main entry point is `src/app.js` and the bundle is at `dist/app.js`. If you don't like those names, just crack open the Gulpfile and change it. Easy.

## Building

Something like

```shell
gulp &
```

## Running

Use whatever! I recommend `http-server` because it's really easy. (`npm install -g http-server`) But you can do a Python SimpleHTTPServer as well, or wrap the whole thing in Express, or -- gasp -- just open the HTML file in your browser. When you download me, I tell you "You have been spooked" by default.

## Testing

Nothing included. If you want to use Jasmine or Jest or whatever the framework-du-jour is, go ahead. I don't include this because assumptions about your setup are dumb and will be outdated tomorrow.
