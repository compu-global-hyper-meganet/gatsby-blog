---
path: "/webfonts-in-azure"
date: "2017-12-17T18:56:55.962Z"
title: "Using webfonts in Azure"
tags: [azure, webfonts]
draft: false
---

Whenever I need to add a new site to Azure, webfonts always catch me out. More specifically the `.woff` and `.woff2` extensions which for some reason are not enabled on Azure by default. This post demonstrates how to self-host webfonts and tweak your Azure config to correctly serve them.

## Using google webfonts

When you go to use google webfonts, you can link directly to the font from their CDN and include it via a link which looks like this:

```html
<link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet">
```

This will work fine for Azure sites (well any sites) as you're not serving the file from Azure itself. However if you need to develop offline or want to control the caching side of things yourself linking out the internet isn't always the best approach.

## npm Typefaces

When I was working on this site I can across an excellent project [Kyle Mathews](https://twitter.com/kylemathews) called [Typefaces](https://github.com/KyleAMathews/typefaces) which offers npm packages for all the existing Google fonts typefaces and many others. He was kind enough to add a package for the particular font I wanted to use for this site.

In order to self host one of the typefaces from this project you can simply `npm install` it.

```javascript
npm install typeface-league-spartan
```

Once the package is installed, you can include it on your site by `import`ing it in a page / component like this:

```javascript
import 'typeface-league-spartan'
```

Then you can consume the font in your css referencing the `font-family` as shown in the snippet below

```css
h1 {
  font-family: 'League Spartan', 'Arial', 'sans-serif';
}
```

## WOFF and WOFF2 on Azure

For some bizarre reason the `.woff` and `.woff2` extensions used by many webfonts aren't enabled by default on the Azure platform which will manifest in `404`'s when your users try to request the fonts.

You can solve this by telling Azure what to do with the extensions via a `mimeType` mapping in a `web.config` in the root of your site.

> NOTE: You still need this file if your backend is `node` or something other than `dotnet`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
      <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
    </staticContent>
  </system.webServer>
</configuration>
```

## Cache control

The previous snippet will get you up and running, but really you don't want your users to be getting a new copy of the webfont each time they visit your site since these files very rarely change.

By default the requests for resources will get sent from your client with a `no-cache` header, meaning that the client will try to re-request the font on each visit.

We can do better than that! with one more small tweak to our `web.config` we can tell the server to add a header to requests instructing the client when it should expire its local cache and request new files. The example below shows how to control the `static` folder of this site to expire the cache after 30 days.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
      <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
    </staticContent>
  </system.webServer>
  <location path="static">
    <system.webServer>
      <staticContent>
        <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="30.00:00:00" />
      </staticContent>
    </system.webServer>
  </location>
</configuration>
```

You can control the cache for specific files and folders via the `path` value on the `location` element. This site contains all the images and webfonts are output into static so that was a sensible place to control the cache in order to speed up rendering and save you, the visitor, precious mobile bandwidth!



